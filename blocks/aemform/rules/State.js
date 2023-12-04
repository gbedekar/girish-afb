import { getItems } from '../util.js';

const commonProps = [
  'visible',
  'label',
  'id',
];

const fieldProps = [
  'value',
  'required',
  'enabled',
];

const fieldsetProps = [
  'items',
];

const ITEM_NODE = Symbol('itemNode');

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
      get: () => (typeof item[prop] === 'undefined' ? defaults[prop] : item[prop]),
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

function addChildren(parent, parentRuleNode, idMap, ruleEngine) {
  const items = getItems(parent);
  items.forEach((itm) => {
    // eslint-disable-next-line no-use-before-define
    const itemRuleNode = createRuleNode(itm, idMap, ruleEngine);
    Object.defineProperty(itemRuleNode, '$parent', {
      get: () => parentRuleNode,
    });
    parent.items.push(itemRuleNode);
    parentRuleNode[itm.name] = itemRuleNode;
    itm.parent = parent.id;
  });
}

function createRuleNode(item, idMap, ruleEngine) {
  const ruleNode = {
    [ITEM_NODE]: item,
  };
  idMap[item.id] = ruleNode;
  if (item.fieldType === 'fieldset') {
    addProperties(ruleNode, item, ...commonProps);
    addChildren(item, ruleNode, idMap, ruleEngine);
    return ruleNode;
  }
  addProperties(ruleNode, item, ...commonProps, ...fieldProps);
  Object.defineProperty(ruleNode, 'valueOf', {
    value: () => {
      trackDependency(item, ruleEngine);
      return item.value;
    },
  });
  return ruleNode;
}

export function constructFormRuleNode(formDef, ruleEngine) {
  const dupFormDef = JSON.parse(JSON.stringify(formDef));
  dupFormDef.items = [];
  const formRuleNode = Object.defineProperties({
    [ITEM_NODE]: dupFormDef,
  }, {
    $items: {
      get: () => dupFormDef.items,
    },
  });
  const idMap = { [dupFormDef.id]: formRuleNode };
  addChildren(dupFormDef, formRuleNode, idMap, ruleEngine);
  return {
    $form: formRuleNode,
    form: dupFormDef,
    idMap,
  };
}

/** Handling Rules */
function createScope($form, $field, event) {
  const siblings = Object.fromEntries(Object.entries($field.$parent).filter(([key]) => !key.startsWith('$')));
  return {
    $form,
    $event: event,
    $field,
    ...siblings,
  };
}

export function updateValue(payload, ruleEngine) {
  const { id: fieldId } = payload;
  const { state: { idMap } } = ruleEngine;
  const field = idMap[fieldId][ITEM_NODE];
  const prevValue = field.value;
  if (field.fieldType === 'checkbox') {
    field.value = payload.checked ? field.enum[0] : field.enum[1];
  } else {
    field.value = payload.value;
  }
  field.dependencies?.forEach((dep) => {
    const depField = idMap[dep];
    // eslint-disable-next-line no-use-before-define
    depField.value = executeEvent(dep, {
      name: 'change',
      payload: {
        changes: [{
          propertyName: 'value',
          currentValue: field.value,
          prevValue,
        }],
      },
    }, ruleEngine);
  });
  // eslint-disable-next-line no-use-before-define
  executeEvent(
    fieldId,
    {
      name: 'change',
      payload: {
        changes: [{
          propertyName: 'value',
          currentValue: field.value,
          prevValue,
        }],
      },
    },
    ruleEngine,
  );
}

function updateProperty(field, prop, newVal) {
  if (newVal !== field[prop]) {
    const oldVal = field[prop];
    field[prop] = newVal;
    return {
      property: prop,
      currentValue: newVal,
      prevValue: oldVal,
    };
  }
  return null;
}

function applyResult(id, updates, ruleEngine) {
  return Object.entries(updates).map(([propName, value]) => {
    const field = ruleEngine.state.idMap[id];
    return updateProperty(field, propName, value);
  }).filter((x) => x != null);
}

const globals = (ruleEngine) => ({
  dispatch: (e, id) => {
    // eslint-disable-next-line no-use-before-define
    const res = executeEvent(id, e, ruleEngine);
    const updates = applyResult(id, res, ruleEngine);
    ruleEngine.dispatch({
      name: 'change',
      id,
      payload: {
        changes: updates,
      },
    });
  },
});

function executeRules(field, scope, ruleEngine) {
  const { formula } = ruleEngine;
  if (!field.compiledRules) {
    if (field.rules) {
      const entries = Object.entries(field.rules).map(([prop, rule]) => {
        const node = formula.compile(rule);
        return [prop, node];
      });
      field.compiledRules = Object.fromEntries(entries);
    }
  }
  if (field.compiledRules) {
    const updates = [];
    Object.entries(field.compiledRules).forEach(([prop, ruleNode]) => {
      ruleEngine.currentField = field.id;
      const newVal = formula.run(ruleNode, scope);
      const update = updateProperty(field, prop, newVal);
      if (update) {
        updates.push(update);
      }
    });
    if (updates.length) {
      ruleEngine.dispatch({
        name: 'change',
        id: field.id,
        payload: updates,
      });
    }
  }
}

export function executeEvent(fieldId, event, ruleEngine) {
  const { state: { idMap, $form }, formula } = ruleEngine;
  const $field = idMap[fieldId];
  const field = $field[ITEM_NODE];
  let evntAST = field.eventAST?.[event.name];
  if (!evntAST && field.events?.[event.name]) {
    field.evntAST = field.eventAST || {};
    if (!Array.isArray(field.events[event.name])) {
      field.events[event.name] = [field.events[event.name]];
    }
    field.evntAST[event.name] = field.events[event.name].map((e) => formula.compile(e));
    evntAST = field.evntAST[event.name];
  }
  const scope = createScope($form, $field, event);

  switch (event.name) {
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
        const res = formula.run(e, scope, 'en-US', globals(ruleEngine));
        return {
          ...acc,
          ...res,
        };
      }, {});
      return result;
    }
  } catch (e) {
    console.error(e);
  }
  return {};
}
