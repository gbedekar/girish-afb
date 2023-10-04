// eslint-disable-next-line import/no-cycle
import { getId } from '../form.js';

function updateLabel(fieldset, index, labelTemplate) {
  const legend = fieldset.querySelector(':scope>.field-label').firstChild;
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
}
