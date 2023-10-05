// eslint-disable-next-line import/no-cycle
import { getId } from '../form.js';
import { isDataElement, isFieldset } from '../rules/RuleEngine.js';

function updateLabel(fieldset, index, labelTemplate) {
  const legend = fieldset.querySelector(':scope>.field-label')?.firstChild;
  const text = labelTemplate.replace('#', index + 1);
  if (legend) {
    legend.textContent = text;
  }
}

function update(fieldset, index, labelTemplate) {
  updateLabel(fieldset, index, labelTemplate);
  fieldset.id = getId(fieldset.name);
  fieldset.setAttribute('data-index', index);
  if (index > 0) {
    fieldset.querySelectorAll('.field-wrapper').forEach((f) => {
      const [label, input, description] = ['label', 'input,select,button,textarea,output', 'description']
        .map((x) => f.querySelector(x));
      input.id = getId(input.name);
      if (label) {
        label.htmlFor = input.id;
      }
      if (description) {
        input.setAttribute('aria-describedby', `${input.Id}-description`);
        description.id = `${input.id}-description`;
      }
    });
  }
}

function createButton(label, icon) {
  const button = document.createElement('button');
  button.className = `item-${icon}`;
  button.type = 'button';
  const text = document.createElement('span');
  text.textContent = label;
  button.append(document.createElement('i'), text);
  return button;
}

function insertRemoveButton(fieldset, wrapper, form) {
  const removeButton = createButton('Remove', 'remove');
  removeButton.addEventListener('click', () => {
    fieldset.remove();
    wrapper.querySelector('.item-add').setAttribute('data-hidden', 'false');
    wrapper.querySelectorAll('[data-repeatable]').forEach((el, index) => {
      update(el, index, wrapper['#repeat-template-label']);
    });
    const event = new CustomEvent('item:remove', {
      detail: {
        item: {
          name: fieldset.name,
          id: fieldset.id,
          index: fieldset.dataset.index,
        },
      },
      bubbles: false,
    });
    form.dispatchEvent(event);
  });
  const legend = fieldset.querySelector(':scope>.field-label');
  legend.append(removeButton);
}

export function repeatFieldset(fieldset) {
  const { parentElement } = fieldset;
  const template = parentElement['#repeat-template'];
  const max = parentElement.getAttribute('data-max');
  const min = parentElement.getAttribute('data-min');
  const childCount = parentElement.children.length - 1; // not counting the add button
  if (max == null || childCount < max) {
    const newFieldset = template.cloneNode(true);
    newFieldset.dataset.qn = parentElement.dataset.qn;
    newFieldset.setAttribute('data-index', childCount);
    update(newFieldset, childCount, parentElement['#repeat-template-label']);
    if (min == null || childCount >= min) {
      insertRemoveButton(newFieldset, parentElement, fieldset.form);
    }
    if (max && +max <= childCount + 1) {
      parentElement.querySelector('.item-add').setAttribute('data-visible', 'false');
    }
    return newFieldset;
  }
  return null;
}

const add = (el, form) => (e) => {
  const { currentTarget } = e;
  const newFieldset = repeatFieldset(el);
  currentTarget.insertAdjacentElement('beforebegin', newFieldset);
  const event = new CustomEvent('item:add', {
    detail: {
      item: {
        name: newFieldset.name,
        id: newFieldset.id,
        index: newFieldset.dataset.index,
      },
    },
    bubbles: false,
  });
  form.dispatchEvent(event);
};

function updateInstances(fieldset, data) {
  function updateFieldset(f, d) {
    [...f.elements].forEach((el) => {
      if (el.hasAttribute('data-repeatable')) {
        // handle repeatable elements inside repeatable elements
      } else if (isDataElement(el) && !isFieldset(el)) {
        el.value = d[el.name];
      }
    });
  }

  let fieldsets = fieldset.form.elements[fieldset.name];
  if (!(fieldsets instanceof RadioNodeList)) {
    fieldsets = [fieldsets];
  }
  const existing = Math.min(fieldsets.length, data.length);
  let i = 0;
  for (i = 0; i < existing; i += 1) {
    updateFieldset(fieldsets[i], data[i]);
  }
  // remove extra fieldsets
  const { length } = fieldsets;
  const j = i;
  for (; i < length; i += 1) {
    fieldsets[j].remove();
  }
  // create new fieldsets
  for (; i < data.length; i += 1) {
    const newFieldset = repeatFieldset(fieldset);
    updateFieldset(newFieldset, data[i]);
    fieldset.insertAdjacentElement('beforebegin', newFieldset);
  }
}

export default function transferRepeatableDOM(formDef, form) {
  form.querySelectorAll('[data-repeatable]').forEach((el) => {
    const div = document.createElement('div');
    if (el.dataset.min) {
      div.setAttribute('data-min', el.dataset.min);
    }
    if (el.dataset.max) {
      div.setAttribute('data-max', el.dataset.max);
    }
    el.insertAdjacentElement('beforebegin', div);
    div.append(el);
    const addLabel = 'Add';
    const addButton = createButton(addLabel, 'add');
    addButton.addEventListener('click', add(el, form));
    div['#repeat-template'] = el.cloneNode(true);
    div['#repeat-template-label'] = el.querySelector(':scope>.field-label').textContent;
    if (+el.min === 0) {
      el.remove();
    } else {
      updateLabel(el, 0, div['#repeat-template-label']);
      el.setAttribute('data-index', 0);
    }
    div.append(addButton);
    div.className = 'form-repeat-wrapper';
  });

  form.addEventListener('setItems', (e) => {
    const {
      item: {
        name, data,
      },
    } = e.detail;
    let fieldset = form.elements[name];
    if (fieldset instanceof RadioNodeList) {
      // eslint-disable-next-line prefer-destructuring
      fieldset = fieldset[0];
    }
    if (fieldset && fieldset.hasAttribute('data-repeatable')
    && fieldset.parentElement.style.display !== 'none') {
      updateInstances(fieldset, data);
      // trigger rule
    }
  });
}
