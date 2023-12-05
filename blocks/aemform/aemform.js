import testFormDefinition from '../../forms/crispr/test200.form.js';
import { enableRuleEngine } from './rules/index.js';
import {
  createButton, createFieldWrapper, createLabel, getItems,
} from './util.js';

export const getId = (function getId() {
  const ids = {};
  return (name) => {
    ids[name] = ids[name] || 0;
    const idSuffix = ids[name] ? `-${ids[name]}` : '';
    ids[name] += 1;
    return `${name}${idSuffix}`;
  };
}());

function generateUnique() {
  return new Date().valueOf() + Math.random();
}

export function constructPayload(form) {
  const payload = { __id__: generateUnique() };
  [...form.elements].forEach((fe) => {
    if (fe.name) {
      if (fe.type === 'radio') {
        if (fe.checked) payload[fe.name] = fe.value;
      } else if (fe.type === 'checkbox') {
        if (fe.checked) payload[fe.name] = payload[fe.name] ? `${payload[fe.name]},${fe.value}` : fe.value;
      } else if (fe.type !== 'file') {
        payload[fe.name] = fe.value;
      }
    }
  });
  return { payload };
}

async function submissionFailure(error, form) {
  alert(error); // TODO define error mechansim
  form.setAttribute('data-submitting', 'false');
  form.querySelector('button[type="submit"]').disabled = false;
}

async function prepareRequest(form, transformer) {
  const { payload } = constructPayload(form);
  const headers = {
    'Content-Type': 'application/json',
  };
  const body = JSON.stringify({ data: payload });
  const url = form.dataset.submit;
  if (typeof transformer === 'function') {
    return transformer({ headers, body, url }, form);
  }
  return { headers, body, url };
}

async function submitForm(form, transformer) {
  try {
    const { headers, body, url } = await prepareRequest(form, transformer);
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });
    if (response.ok) {
      window.location.href = form.dataset?.redirect || 'thankyou';
    } else {
      const error = await response.text();
      throw new Error(error);
    }
  } catch (error) {
    submissionFailure(error, form);
  }
}

async function handleSubmit(form, transformer) {
  if (form.getAttribute('data-submitting') !== 'true') {
    form.setAttribute('data-submitting', 'true');
    if (form.dataset?.action) {
      form.action = form.dataset.action;
      form.target = form.dataset.target || '_self';
      form.submit();
    } else {
      await submitForm(form, transformer);
    }
  }
}

function setPlaceholder(element, fd) {
  if (fd.Placeholder) {
    element.setAttribute('placeholder', fd.Placeholder);
  }
}

const constraintsDef = Object.entries({
  'password|tel|email|text': [['Max', 'maxlength'], ['Min', 'minlength']],
  'number|range|date': ['Max', 'Min', 'Step'],
  file: ['Accept', 'Multiple'],
  fieldset: [['Max', 'data-max'], ['Min', 'data-min']],
}).flatMap(([types, constraintDef]) => types.split('|')
  .map((type) => [type, constraintDef.map((cd) => (Array.isArray(cd) ? cd : [cd, cd]))]));

const constraintsObject = Object.fromEntries(constraintsDef);

function setConstraints(element, fd) {
  const constraints = constraintsObject[fd.Type];
  if (constraints) {
    constraints
      .filter(([nm]) => fd[nm])
      .forEach(([nm, htmlNm]) => {
        element.setAttribute(htmlNm, fd[nm]);
      });
  }
}

function createHelpText(fd) {
  const div = document.createElement('div');
  div.className = 'field-description';
  div.setAttribute('aria-live', 'polite');
  div.innerText = fd.description;
  div.id = `${fd.id}-description`;
  return div;
}

function createSubmit(fd) {
  const wrapper = createButton(fd);
  const button = wrapper.querySelector('button');
  button.id = '';
  button.name = ''; // removing id and name from button otherwise form.submit() will not work
  return wrapper;
}

const inputTypeMapping = {
  'text-input': 'text',
  'number-input': 'text',
  'date-input': 'date',
  'multiline-input': 'textarea',
  checkbox: 'checkbox',
};

function createInput(fd) {
  const input = document.createElement('input');
  input.type = inputTypeMapping[fd.fieldType];
  setPlaceholder(input, fd);
  setConstraints(input, fd);
  return input;
}

const withFieldWrapper = (element) => (fd) => {
  const wrapper = createFieldWrapper(fd);
  wrapper.append(element(fd));
  return wrapper;
};

const createTextArea = withFieldWrapper((fd) => {
  const input = document.createElement('textarea');
  setPlaceholder(input, fd);
  return input;
});

const createSelect = withFieldWrapper((fd) => {
  const select = document.createElement('select');
  if (fd.placeholder) {
    const ph = document.createElement('option');
    ph.textContent = fd.placeholder;
    ph.setAttribute('selected', '');
    ph.setAttribute('disabled', '');
    select.append(ph);
  }

  const Option = (label, value) => {
    const option = document.createElement('option');
    option.textContent = label?.trim();
    option.value = value?.trim() || label?.trim();
    if (fd.value === option.value) {
      option.setAttribute('selected', '');
    }
    return option;
  };
  const options = fd.enum.map((value, index) => Option(fd.enumNames?.[index], value));
  select.append(...options);
});

function createRadio(fd) {
  const wrapper = createFieldWrapper(fd);
  wrapper.insertAdjacentElement('afterbegin', createInput(fd));
  return wrapper;
}

function createHidden(fd) {
  const input = document.createElement('input');
  input.type = 'hidden';
  input.id = fd.id;
  input.name = fd.name;
  input.value = fd.default;
  return input;
}

function createLegend(fd) {
  return createLabel(fd, 'legend');
}

export function insertItems(fields, container) {
  fields.forEach((fd) => {
    // eslint-disable-next-line no-use-before-define
    const el = renderField(fd);
    const input = el.querySelector('input,textarea,select');
    if (fd.required === true) {
      input.setAttribute('required', 'required');
    }
    if (input) {
      input.id = fd.id;
      input.name = fd.name;
      if (input.type !== 'file') {
        input.value = fd.default || '';
        if (input.type === 'radio' || input.type === 'checkbox') {
          input.value = fd.enum[0];
          input.checked = fd.enum[0] === fd.default;
        }
      }
      if (fd.description) {
        input.setAttribute('aria-describedby', `${fd.id}-description`);
      }
    }
    container.append(el);
  });
}

function createFieldSet(fd) {
  const wrapper = createFieldWrapper(fd, 'fieldset');
  wrapper.id = fd.id;
  wrapper.name = fd.name;
  wrapper.replaceChildren(createLegend(fd));
  const items = getItems(fd);
  insertItems(items, wrapper);
  return wrapper;
}

function createPlainText(fd) {
  const paragraph = document.createElement('p');
  paragraph.textContent = fd.label;
  const wrapper = createFieldWrapper(fd);
  wrapper.id = fd.Id;
  wrapper.replaceChildren(paragraph);
  return wrapper;
}

const fieldRenderers = {
  radio: createRadio,
  checkbox: createRadio,
  textarea: createTextArea,
  select: createSelect,
  button: createButton,
  submit: createSubmit,
  hidden: createHidden,
  fieldset: createFieldSet,
  plaintext: createPlainText,
};

function renderField(fd) {
  const renderer = fieldRenderers[fd.fieldType];
  let field;
  if (typeof renderer === 'function') {
    field = renderer(fd);
  } else {
    field = createFieldWrapper(fd);
    field.append(createInput(fd));
  }
  if (fd.description) {
    field.append(createHelpText(fd));
  }
  return field;
}

function createForm(formDef) {
  const form = document.createElement('form');
  const fields = getItems(formDef);
  insertItems(fields, form);
  form.dataset.submit = formDef.action;
  return form;
}

export default async function decorate(block) {
  console.time('form generation');
  const form = await enableRuleEngine(testFormDefinition, createForm);
  block.append(form);
  console.timeEnd('form generation');
}
