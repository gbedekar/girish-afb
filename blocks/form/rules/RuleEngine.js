/* eslint-disable max-classes-per-file */
import Formula from './parser/Formula.js';
import transformRule from './RuleCompiler.js';
import formatFns from '../formatting.js';

function stripTags(input, allowd) {
  const allowed = ((`${allowd || ''}`)
    .toLowerCase()
    .match(/<[a-z][a-z0-9]*>/g) || [])
    .join(''); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
  const tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
  const comments = /<!--[\s\S]*?-->/gi;
  return input.replace(comments, '')
    .replace(tags, ($0, $1) => (allowed.indexOf(`<${$1.toLowerCase()}>`) > -1 ? $0 : ''));
}

export function sanitizeHTML(input) {
  return stripTags(input, '<a>');
}

function coerceValue(val) {
  if (val === 'true') return true;
  if (val === 'false') return false;
  return val;
}

export function isFieldset(e) {
  return e.tagName === 'FIELDSET';
}

export function isRepeatableFieldset(e) {
  return isFieldset(e) && e.hasAttribute('data-repeatable') && e.name;
}

export function isDataElement(e) {
  return e.tagName !== 'BUTTON' && e.name;
}

function getValue(fe) {
  if (fe.type === 'checkbox' || fe.type === 'radio') {
    if (fe.checked) return coerceValue(fe.value);
  } else if (fe.tagName === 'OUTPUT') {
    return fe.dataset.value || '';
  } else if (fe.name) {
    return coerceValue(fe.value);
  }
  return undefined;
}

function getFieldsetPayload(fieldset) {
  let fieldsets = fieldset.form.elements[fieldset.name];
  if (!(fieldsets instanceof RadioNodeList)) {
    fieldsets = [fieldsets];
  }
  return fieldsets.map((fe) => [...fe.elements].filter(isDataElement).reduce((acc, e) => ({
    ...acc,
    [e.name]: getValue(e),
  }), {}));
}

function constructData(elements, fieldsetName = '', path = 'form') {
  const els = [...elements];
  const dataElements = els.filter((el) => {
    const elFieldsetName = el.dataset.fieldset || '';
    return isDataElement(el) && fieldsetName === elFieldsetName;
  });
  const result = dataElements.reduce((acc, el) => {
    if (isFieldset(el)) {
      const repeat = isRepeatableFieldset(el);
      const fPath = repeat ? `${path}.${el.name}[]` : path;
      const data = constructData(el.elements, el.name, fPath);
      if (repeat) {
        const parent = el.parentElement;
        parent.dataset.qn = `${path}.${el.name}`;
        el.dataset.qn = `${path}.${el.name}`;
        acc.data[el.name] = acc[el.name] || [];
        acc.data[el.name][el.dataset.index] = data.data;
        acc.form[el.name] = {
          $type: 'fieldset',
          $qn: `${path}.${el.name}`,
          $name: el.name,
          ...data.form,
        };
        acc.idMap[el.id] = acc.form[el.name];
        return {
          data: acc.data,
          form: acc.form,
          idMap: {
            ...acc.idMap,
            ...data.idMap,
          },
        };
      }
      return {
        data: {
          ...acc.data,
          ...data.data,
        },
        form: {
          ...acc.form,
          ...data.form,
        },
        idMap: {
          ...acc.idMap,
          ...data.idMap,
        },
      };
    }
    el.dataset.qn = `${path}.${el.name}`;
    acc.data[el.name] = getValue(el);
    acc.form[el.id] = { $type: 'field', $qn: `${path}.${el.name}`, $name: el.name };
    acc.idMap[el.id] = acc.form[el.id];
    return acc;
  }, { data: {}, form: {}, idMap: {} });
  return result;
}

export function getDataParent(fieldset, data) {
  const qn = fieldset.$qn.split('.').slice(1, -1);
  // handle the case when there is nested repeatable fieldset
  const parent = qn.reduce((acc, key) => acc[key], data);
  return parent;
}

export default class RuleEngine {
  rulesOrder = {};

  constructor(formRules, fieldIdMap, formTag) {
    this.formTag = formTag;
    const { form, data, idMap } = constructData(formTag.elements);
    this.data = data;
    this.formDef = form;
    this.idMap = idMap;
    this.formula = new Formula();
    const newRules = formRules.map(([fieldId, fieldRules]) => [
      fieldId,
      fieldRules.map((rule) => transformRule(rule, fieldIdMap, this.formula)),
    ]);

    this.formRules = Object.fromEntries(newRules);
    this.dependencyTree = newRules.reduce((fields, [fieldId, rules]) => {
      fields[fieldId] = fields[fieldId] || { deps: {} };
      rules.forEach(({ prop, deps }) => {
        deps.forEach((dep) => {
          fields[dep] = fields[dep] || { deps: {} };
          fields[dep].deps[prop] = fields[dep].deps[prop] || [];
          fields[dep].deps[prop].push(fieldId);
        });
      });
      return fields;
    }, {});
  }

  listRules(fieldId) {
    const arr = {};
    let index = 0;
    const stack = [fieldId];
    do {
      const el = stack.pop();
      arr[el] = index;
      index += 1;
      if (this.dependencyTree[el]?.deps.Value) {
        stack.push(...this.dependencyTree[el].deps.Value);
      }
      // eslint-disable-next-line no-loop-func
      ['Visible', 'Label'].forEach((prop) => {
        this.dependencyTree[el]?.deps[prop]?.forEach((field) => {
          arr[field] = index;
          index += 1;
        });
      });
      // @todo add label deps as well.
    } while (stack.length > 0);
    return Object.entries(arr).sort((a, b) => a[1] - b[1]).map((_) => _[0]).slice(1);
  }

  importData(element, data) {
    const dataNode = getDataParent(element, this.data);
    dataNode[element.$name] = data;
    const event = new CustomEvent('setItems', {
      detail: {
        item: {
          name: element.$name,
          id: element.$id,
          data,
        },
      },
      bubbles: false,
    });
    this.formTag.dispatchEvent(event);
  }

  updateValue(fieldId, value) {
    const elementDef = this.idMap[fieldId];
    const element = document.getElementById(fieldId);
    if (elementDef.$type === 'fieldset') {
      this.importData(this.idMap[fieldId], value);
    } else if (!(element instanceof NodeList)) {
      this.data[element.name] = coerceValue(value);
      const { displayFormat } = element.dataset;
      if (element.tagName === 'OUTPUT') {
        const formatFn = formatFns[displayFormat] || ((x) => x);
        element.value = formatFn(value);
        element.dataset.value = value;
      } else {
        element.value = value;
      }
      if (element.type === 'range') {
        element.dispatchEvent(new CustomEvent('input', { bubbles: false }));
      }
    }
  }

  // eslint-disable-next-line class-methods-use-this
  updateVisible(fieldId, value) {
    const element = document.getElementById(fieldId);
    let wrapper = element;
    if (!isFieldset(element)) {
      wrapper = element.closest('.field-wrapper');
    }
    wrapper.dataset.visible = value;
  }

  // eslint-disable-next-line class-methods-use-this
  updateLabel(fieldId, value) {
    const element = document.getElementById(fieldId);
    const label = element.closest('.field-wrapper').querySelector('.field-label');
    label.innerHTML = sanitizeHTML(value);
  }

  setData(field) {
    const fieldName = field.name;
    if (field.type === 'checkbox') {
      this.data[fieldName] = field.checked ? coerceValue(field.value) : undefined;
    } else {
      this.data[fieldName] = coerceValue(field.value);
    }
  }

  applyRules(rules) {
    rules.forEach((fId) => {
      this.formRules[fId]?.forEach((rule) => {
        const newValue = this.formula.evaluate(rule.ast, this.data);
        const handler = this[`update${rule.prop}`];
        if (handler instanceof Function) {
          handler.apply(this, [fId, newValue]);
        }
      });
    });
  }

  getRules(id) {
    if (!this.rulesOrder[id]) {
      this.rulesOrder[id] = this.listRules(id);
    }
    return this.rulesOrder[id];
  }

  enable() {
    this.formTag.addEventListener('input', (e) => {
      const field = e.target;
      const valid = this.formTag.checkValidity();
      if (valid) {
        let fieldId = field.id;
        let rules = [];
        const fieldset = field.closest('fieldset');
        if (fieldset && fieldset.getAttribute('data-repeatable') === 'true') {
          this.data = {
            ...this.data,
            ...getFieldsetPayload(fieldset),
          };
          fieldId = field.name;
        } else {
          this.setData(field);
        }
        if (field.type === 'radio') {
          const radios = this.formTag.elements[field.name];
          if (radios instanceof RadioNodeList) {
            rules = [...radios].flatMap((f) => this.getRules(f.id));
          }
        } else {
          rules = this.getRules(fieldId);
        }
        this.applyRules(rules);
      }
    });

    this.formTag.addEventListener('item:add', (e) => {
      const fieldsetName = e.detail.item.name;
      const fieldset = this.formTag.elements[e.detail.item.id];
      const data = getDataParent(fieldset, this.data);
      data[fieldsetName] = data[fieldsetName] || [];
      data[fieldsetName][fieldset.dataset.index] = constructData(fieldset.elements, fieldsetName);
      const rules = [...fieldset.elements].map((fd) => this.getRules(fd.name)).flat();
      this.applyRules(rules);
    });

    this.formTag.addEventListener('item:remove', (e) => {
      const fieldsetName = e.detail.item.name;
      let fieldset = this.formTag.elements[fieldsetName];
      if (fieldset instanceof RadioNodeList) {
        fieldset = fieldset.item(0);
      }
      const data = getDataParent(fieldset, this.data);
      data[fieldsetName].splice(e.detail.item.index, 1);
      const rules = [...fieldset.elements].map((fd) => this.getRules(fd.name)).flat();
      this.applyRules(rules);
    });
  }
}
