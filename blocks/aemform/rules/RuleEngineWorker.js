/* eslint-disable max-classes-per-file */
import Formula from './formula/index.js';
import { constructFormRuleNode, executeEvent, updateValue } from './State.js';
import { getItems } from '../util.js';
import functions from './functions.js';

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

export class RuleEngine {
  rulesOrder = {};

  constructor(formDef, formTag) {
    this.formTag = formTag;
    this.state = constructFormRuleNode(formDef, this);
    this.formula = new Formula(functions);
    const items = getItems(this.state.form);
    items.forEach((item) => {
      executeEvent(item.id, {
        name: 'change',
        payload: {
          changes: [],
        },
      }, this);
      executeEvent(item.id, {
        name: 'initialize',
        payload: {},
      }, this);
    });
  }

  getState() {
    return this.state.form;
  }

  // eslint-disable-next-line class-methods-use-this
  dispatch() { }
}

let ruleEngine;
onmessage = (e, postMessage) => {
  switch (e.data.name) {
    case 'init':
      console.time('createForm');
      ruleEngine = new RuleEngine(e.data.payload);
      console.timeEnd('createForm');
      // eslint-disable-next-line no-case-declarations
      const state = ruleEngine.getState();
      postMessage({
        name: 'init',
        payload: state,
      });
      break;
    case 'change':
      ruleEngine.dispatch = (ev) => {
        postMessage(ev);
      };
      updateValue(e.data.payload, ruleEngine);
      break;
    default:
      break;
  }
};

export function postMessage(e, postMessage) {
  onmessage(e, postMessage);
}
