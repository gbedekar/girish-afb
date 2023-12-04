import { getItems } from '../util.js';

const commonProps = [
  'visible',
  'label',
];

const fieldProps = [
  'value',
  'required',
  'enabled',
];

const defaults = {
  required: false,
  enabled: true,
  visible: true,
  label: {
    visible: true,
    value: '',
  },
};

function addProperties(obj, item, ...props) {
  const properties = props.reduce((acc, prop) => {
    acc[`$${prop}`] = {
      get: () => item[prop] || defaults[prop],
    };
    return acc;
  }, {});
  Object.defineProperties(obj, properties);
  return obj;
}

function trackDependency(field, ruleEngine) {
  if (ruleEngine.currentField) {
    field.dependencies = field.dependencies || [];
    if (!field.dependencies.includes(ruleEngine.currentField)) {
      field.dependencies.push(ruleEngine.currentField);
    }
  }
}

function createRuleNode(item, idMap, ruleEngine) {
  const ruleNode = {};
  if (item.fieldType === 'fieldset') {
    const fNode = addProperties(ruleNode, item, ...commonProps);
    item.items.forEach((itm) => {
      const itemRuleNode = createRuleNode(itm, idMap, ruleEngine);
      ruleNode.$items[itm.name] = itemRuleNode;
      ruleNode[itm.name] = itemRuleNode;
      idMap[item.id] = item;
    });
    return fNode;
  }
  const fNode = addProperties({}, item, ...commonProps, ...fieldProps);
  Object.defineProperty(fNode, 'valueOf', {
    value: () => {
      trackDependency(item, ruleEngine);
      return item.value;
    },
  });
  return fNode;
}

export function constructFormRuleNode(formDef, ruleEngine) {
  const formRuleNode = {};
  const idMap = {};
  const dupFormDef = JSON.parse(JSON.stringify(formDef));
  const items = getItems(dupFormDef);
  items.forEach((item) => {
    formRuleNode[item.name] = createRuleNode(item, idMap, ruleEngine);
    idMap[item.id] = item;
  });
  return {
    $form: formRuleNode,
    form: dupFormDef,
    idMap,
  };
}

function createScope(form, field) {
  return form.$form;
}

export function updateValue(form, fieldId, value, formula) {
  const field = form.idMap[fieldId];
  field.value = value;
  field.dependencies?.forEach((dep) => {
    const depField = form.idMap[dep];
    // eslint-disable-next-line no-use-before-define
    depField.value = executeEvent(form, dep, 'change', formula);
  });
}

function updateProperty(field, prop, newVal) {
  if (newVal !== field[prop]) {
    field[prop] = newVal;
    return true;
    // trigger change event and e
  }
  return false;
}

function executeRules(field, scope, ruleEngine) {
  if (!field.compiledRules) {
    if (field.rules) {
      const entries = Object.entries(field.rules).map(([prop, rule]) => {
        const node = ruleEngine.formula.compile(rule);
        return [prop, node];
      });
      field.compiledRules = Object.fromEntries(entries);
    }
  }
  if (field.compiledRules) {
    Object.entries(field.compiledRules).forEach(([prop, ruleNode]) => {
      ruleEngine.currentField = field.id;
      const newVal = ruleEngine.formula.run(ruleNode, scope);
      updateProperty(field, prop, newVal);
    });
  }
}

export function executeEvent(form, fieldId, eventName, ruleEngine) {
  const field = form.idMap[fieldId];
  let evntAST = field.eventAST?.[eventName];
  if (!evntAST && field.events?.[eventName]) {
    field.evntAST = field.eventAST || {};
    if (!Array.isArray(field.events[eventName])) {
      field.events[eventName] = [field.events[eventName]];
    }
    field.evntAST[eventName] = field.events[eventName].map((e) => ruleEngine.formula.compile(e));
    evntAST = field.evntAST[eventName];
  }
  const scope = createScope(form, field);

  switch (eventName) {
    case 'change':
      executeRules(field, scope, ruleEngine);
      break;
    default:
      break;
  }

  try {
    if (evntAST) {
      const result = evntAST.reduce((acc, e) => {
        ruleEngine.currentField = field.id;
        const res = ruleEngine.formula.run(e, scope);
        return {
          ...acc,
          ...res,
        };
      });
      return result;
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}
