/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import { generateFormRendition } from '../../../../../blocks/form/form.js';

/* eslint-disable no-undef */

const FORM_IMPORTER = 'https://g7ory75qdb.execute-api.ap-south-1.amazonaws.com/vega-services/importer';

// action containers

const actionComponent = document.querySelector('select#components');
const actionAttribute = document.querySelector('select#attributes');
const actionValue = document.querySelector('select#values');
const actionCompPosition = document.querySelector('select#positions');
const scanFormEl = document.querySelector('form');
const domainEl = document.querySelector('#domainURL');
const includePlainText = document.querySelector('#includePlainText');
const includeHiddenFields = document.querySelector('#includeHiddenFields');
const groupBySelector = document.querySelector('#groupBySelector');
const startBtn = document.querySelector('#startBtn');
const copyAction = document.querySelector('#copyAction');
const msgEl = document.querySelector('#msg');
const switchView = document.querySelector('#switchView');
const cardsContainer = document.getElementById('cards-container');
const formPreview = document.querySelector('.form-preview');
const jsonPreview = document.querySelector('.json-preview');
let forms = [];
let editor;
let article;
let selectedForm;

const emptyField = {
  Name: '',
  Type: '',
  Description: '',
  Placeholder: '',
  Label: '',
  'Read Only': '',
  Mandatory: '',
  Pattern: '',
  Step: '',
  Min: '',
  Max: '',
  Value: '',
  Options: '',
  OptionNames: '',
  Fieldset: '',
};

function convertToCSV(fields, divider = '\t') {
  if (fields && fields.length > 0) {
    const keys = Object.keys({ ...emptyField, ...fields?.[0] });
    const th = keys.join(divider);
    const rows = fields
      .map((field) => Object.values({ ...emptyField, ...field }).join(divider))
      .join('\n');
    return `${th}\n${rows}`;
  }
  return 'table is empty';
}

function updateStatus(msg, completed = false, error = false) {
  startBtn.disabled = !completed;
  msgEl.textContent = msg;
  if (error) {
    msgEl.classList.add('error');
  } else {
    msgEl.classList.remove('error');
  }
}

function cleanUp() {
  cardsContainer.innerHTML = '';
}

function cardTemplate(form, index) {
  return `<article class="card" data-name="${form.name}" data-index="${index}">
                <div class="card-header">
                    <h5 class="card-header-title">${form.name}</h5>
                    <div class="features">
                    ${form?.stats?.attachmentsUsed ? '<span title="Attachments found in form." class="icon attachment-icon"></span>' : ''}
                    ${form?.stats?.recaptchaUsed ? '<span title="Google reCaptcha found in form." class="icon recaptcha-icon"></span>' : ''}
                    ${form?.stats?.isMarketToForm ? '<span title="Its a Marketo Form" class="icon marketo-icon"></span>' : ''}
                    </div>
                </div>
                <div class="card-content">
                    <div class="follow-info">
                      <h2><div><span> ${form?.stats?.fields || 0}</span><small>Fields</small></div></h2>
                      <h2><div><span>${form?.stats?.hiddenFields || 0}</span><small>Hidden Fields</small></div></h2>
                    </div>
                </div>
                <footer class="card-footer">
                </footer>
            </article>`;
}

function renderCards() {
  cleanUp();
  const formCards = forms.map(cardTemplate).join('');
  cardsContainer.innerHTML += formCards;
}

function loadForm() {
  const formEl = document.createElement('form');
  generateFormRendition(selectedForm?.data, formEl);
  formPreview.replaceChildren(formEl);
  // Set JSON data to the editor
  editor.session.setValue(JSON.stringify(selectedForm, null, 2));
  copyAction.disabled = false;
}

function setupJSONView() {
  editor = ace.edit('editor');
  editor.setTheme('ace/theme/monokai');
  editor.session.setMode('ace/mode/json');
}

function fillUpMissingFields() {
  forms.forEach((form) => {
    const data = [];
    form.data.forEach((field) => {
      data.push({ ...emptyField, ...field });
    });
    form.data = data;
  });
}

async function scanNow() {
  const valid = scanFormEl.checkValidity();
  if (valid) {
    cleanUp();
    updateStatus('Scan Initiated...');
    const domain = domainEl.value;
    const payload = {
      url: domain,
      options: {
        includePlainText: includePlainText.checked,
        includeHidden: includeHiddenFields.checked,
        groupBySelector: groupBySelector.value || '',
      },
    };
    try {
      const response = await fetch(FORM_IMPORTER, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        forms = await response.json();
        renderCards(forms);
        fillUpMissingFields(forms);
        updateStatus('Scanning Completed', true, false);
      } else {
        const msg = await response.text();
        updateStatus(`Failed to scan ${msg}`, true, true);
      }
    } catch (e) {
      updateStatus(e.message, true, true);
    }
    startBtn.disabled = false;
  }
}

function copyToClipboard() {
  if (selectedForm) {
    const data = convertToCSV(selectedForm.data);
    navigator.clipboard
      .writeText(data)
      .then(() => {
        // eslint-disable-next-line no-alert
        alert('Copied to clipboard');
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert('Issue in copying to clipboard use json view');
      });
  }
}

function updateActionComponents() {
  const formData = selectedForm?.data;
  actionComponent.innerHTML = '';
  formData.forEach((field, index) => {
    const { Type , Label } = field;
    const option = document.createElement('option');
    option.value = Type;
    option.dataset.component = Type;
    option.textContent = `${Type} - ${Label}`;
    option.id = index;
    actionComponent.appendChild(option);

    const compPosOption = document.createElement('option');
    compPosOption.value = index;
    compPosOption.textContent = index;
    compPosOption.id = index;
    actionCompPosition.appendChild(compPosOption);
  });
  const option = document.createElement('option');
  option.value = 'addComponent';
  option.dataset.component = 'Add Component';
  option.textContent = 'Add Component';
  option.id = -1;
  actionComponent.appendChild(option);
}

copyAction.addEventListener('click', copyToClipboard);
startBtn.addEventListener('click', scanNow);
cardsContainer.addEventListener('click', (event) => {
  if (article) {
    article.classList.toggle('selected');
  }
  article = event?.target?.closest('article');
  if (article) {
    article.classList.toggle('selected');
    const { index } = article.dataset;
    selectedForm = forms[index];
    loadForm();
    updateActionComponents();
  }
});
switchView.addEventListener('click', () => {
  formPreview.classList.toggle('hide');
  jsonPreview.classList.toggle('hide');
});
setupJSONView();

// action container

actionComponent.addEventListener('change', (event) => {
  const component = event.target;
  const value = component.value;
  if (value === 'addComponent') {
    const newComponentType = prompt('Enter new component Type');
    const formTemplate = selectedForm?.data[0];
    const component = { ...formTemplate };
    // clear all values of its keys
    Object.keys(component).forEach((key) => {
      if (typeof component[key] === 'string') {
        component[key] = '';
      }
      if (typeof component[key] === 'number') {
        component[key] = 0;
      }
      if (typeof component[key] === 'boolean') {
        component[key] = 'false';
      }
      if (Array.isArray(component[key])) {
        component[key] = [];
      }
    });
    component.Type = newComponentType;
    selectedForm?.data.push(component);
    loadForm();
    updateActionComponents();
    return;
  }
  const selectedOption = component.options[component.selectedIndex];
  const selectedId = selectedOption.id;
  const selectedComponent = selectedForm?.data[selectedId];
  actionAttribute.innerHTML = '';
  Object.keys(selectedComponent).forEach((key ,) => {
    const option = document.createElement('option');
    option.value = key;
    option.dataset.attribute = key;
    option.textContent = key;
    option.setAttribute('componentIndex', selectedId);
    actionAttribute.appendChild(option);
  });
  const option = document.createElement('option');
  option.value = 'addAttribute';
  option.dataset.component = 'Add Attribute';
  option.textContent = 'Add Attribute';
  option.id = -1;
  actionAttribute.appendChild(option);
});

actionAttribute.addEventListener('change', (event) => {
  const attribute = event.target;
  const selectedOption = attribute.options[attribute.selectedIndex];
  const selectedAttribute = selectedOption.value;
  actionValue.innerHTML = '';
 if(selectedAttribute === 'addAttribute') {
    const newAttribute = prompt('Enter new attribute');
    const selectedFormData = selectedForm?.data;
    selectedFormData.forEach((component) => {
      component[newAttribute] = '';
    });
    updateActionComponents();
    loadForm();
    return;
  }

  selectedForm?.data.forEach((field, index) => {
    const option = document.createElement('option');
    option.value = field[selectedAttribute];
    option.dataset.value = field[selectedAttribute];
    option.textContent =
      field[selectedAttribute] === '' ? 'Empty' : field[selectedAttribute];
    option.setAttribute('attribute', selectedAttribute);
    actionValue.appendChild(option);
  });
  const option = document.createElement('option');
  option.value = 'addValue';
  option.dataset.component = 'Add Value';
  option.textContent = 'Add Value';
  option.id = -1;
  actionValue.appendChild(option);
});

actionValue.addEventListener('change', (event) => {
  const value = event.target;
  const selectedOption = value.options[value.selectedIndex];
  const selectedValue = selectedOption.value;
  const selectedAttribute = actionAttribute.options[actionAttribute.selectedIndex].value;
  const componentIndex = actionComponent.options[actionComponent.selectedIndex].id;
  const component = selectedForm?.data[componentIndex];
  if (selectedValue === 'addValue') {
    const newValue = prompt('Enter new value');
    const option = document.createElement('option');
    option.value = newValue;
    option.dataset.value = newValue;
    option.textContent = newValue;
    actionValue.appendChild(option);
    component[selectedAttribute] = newValue;
  } else {
    component[selectedAttribute] = selectedValue;
  }
  loadForm();
});


actionCompPosition.addEventListener('change', (event) => {
  const position = event.target;
  const selectedOption = position.options[position.selectedIndex];
  const selectedPosition = selectedOption.value;
  const currentCompIndex = actionComponent.options[actionComponent.selectedIndex].id;
  const newIndex = parseInt(selectedPosition);
  const selectedFormData = selectedForm?.data;
  // move the element at current index to new index
  const element = selectedFormData[currentCompIndex];
  selectedFormData.splice(currentCompIndex, 1);
  selectedFormData.splice(newIndex, 0, element);
  loadForm();
});