/* eslint-disable max-classes-per-file */
import Formula from './formula/index.js';
import { constructFormRuleNode, executeEvent, updateValue } from './State.js';
import { getItems } from '../util.js';

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

export default class RuleEngine {
  rulesOrder = {};

  constructor(formDef, formTag) {
    this.formTag = formTag;
    this.state = constructFormRuleNode(formDef, this);
    this.formula = new Formula();
    const items = getItems(this.state.form);
    items.forEach((item) => {
      executeEvent(this.state, item.id, 'change', this);
    });
  }

  getState() {
    return this.state.form;
  }

  // enable() {
  //   this.formTag.addEventListener('input', (e) => {
  //     const field = e.target;
  //     const { id } = field;
  //     updateValue(this.state, id, field, this.formula);
  //   });
  // }
}

export async function applyRuleEngine(formDef) {
  try {
    const ruleEngine = new RuleEngine(formDef);
    ruleEngine.enable();
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log('unable to apply rules ', e);
  }
}

onmessage = (e) => {
  console.log('Message received from main script');
  let ruleEngine;
  switch (e.data.event) {
    case 'init':
      ruleEngine = new RuleEngine(e.data.payload);
      const state = ruleEngine.getState();
      postMessage(state);
      break;
    default:
      break;
  }
};
