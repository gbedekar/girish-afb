import { transformFileDOM, transformFileRequest } from './attachments.js';
import { transformCaptchaDOM, transformCaptchaRequest } from './recaptcha.js';
// eslint-disable-next-line import/no-cycle
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
  transformTable,
  transformPrintButton,
];

export const asyncTransformers = [
];

export const requestTransformers = [
  transformCaptchaRequest,
  transformFileRequest,
];
