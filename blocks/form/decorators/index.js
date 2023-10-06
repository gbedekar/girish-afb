// eslint-disable-next-line import/no-cycle
import { applyRuleEngine } from '../rules/index.js';
import { transformFileDOM, transformFileRequest } from './attachments.js';
import { transformCaptchaDOM, transformCaptchaRequest } from './recaptcha.js';
import transformRepeatableDOM from './repeat.js';
import transformTable from './datatable.js';

const transformPrintButton = (formDef, formTag) => {
  formTag.querySelector('button[name="print"]')?.addEventListener('click', () => {
    window.print();
  });
};

export const transformers = [
  transformFileDOM,
  transformCaptchaDOM,
  transformRepeatableDOM,
  applyRuleEngine,
  transformTable,
  transformPrintButton,
];

export const asyncTransformers = [
];

export const requestTransformers = [
  transformCaptchaRequest,
  transformFileRequest,
];
