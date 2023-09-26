// eslint-disable-next-line import/no-cycle
import { getId } from '../form.js';

/**
 * Decorator for handling repeatable element in HTML
 * the decorator is required if you have Fields in your form that can be repeated
 * it requires the following attributes present in your excel
 * repeatable : true
 * min : <number>
 * max : <number>
 */

/**
 * The function updates the ids of elements in the fieldset
 * This is required since in html elements cannot have multiple ids
 * @param {HTMLElement} fieldset the element that repeats itself
 * @param {number} index the index of the element which needs to be updated
 * @param {string} labelTemplate the labels can be dynamic and can have # in them,
 * which gets replaced by the index of the element
 */
function updateIds(fieldset, index, labelTemplate) {
  const legend = fieldset.querySelector(':scope>.field-label').firstChild;
  const text = labelTemplate.replace('#', index + 1);
  legend.textContent = text;
  fieldset.id = getId(fieldset.name);
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
    wrapper.querySelectorAll('[data-repeatable="true"]').forEach((el, index) => {
      updateIds(el, index, wrapper['#repeat-template-label']);
    });
    const event = new CustomEvent('item:remove', {
      detail: { item: { name: fieldset.name, id: fieldset.id } },
      bubbles: false,
    });
    form.dispatchEvent(event);
  });
  const legend = fieldset.querySelector(':scope>.field-label');
  legend.append(removeButton);
}

const add = (wrapper, form) => (e) => {
  const { currentTarget } = e;
  const { parentElement } = currentTarget;
  const fieldset = parentElement['#repeat-template'];
  const max = parentElement.getAttribute('data-max');
  const min = parentElement.getAttribute('data-min');
  const childCount = parentElement.children.length - 1;
  if (childCount < +max || max == null) {
    const newFieldset = fieldset.cloneNode(true);
    updateIds(newFieldset, childCount, parentElement['#repeat-template-label']);
    if (childCount >= +min) {
      insertRemoveButton(newFieldset, wrapper, form);
    }
    if (+max <= childCount + 1) {
      e.currentTarget.setAttribute('data-hidden', 'true');
    }
    currentTarget.insertAdjacentElement('beforebegin', newFieldset);
    const event = new CustomEvent('item:add', {
      detail: { item: { name: newFieldset.name, id: newFieldset.id } },
      bubbles: false,
    });
    form.dispatchEvent(event);
  }
};

function handleMinChange(wrapperDiv) {
  const observer = new MutationObserver((records) => {
    records.forEach((record) => {
      const currentChildCount = wrapperDiv.querySelectorAll(`[data-im="${wrapperDiv.id}"]`).length;
      const { min } = record.target.dataset;
      const addButton = wrapperDiv.querySelector('button.item-add');
      if (min > currentChildCount) {
        for (let i = 0; i < min - currentChildCount; i += 1) {
          addButton.click();
        }
      } else if (min < currentChildCount) {
        wrapperDiv.querySelectorAll(`[data-im="${wrapperDiv.id}"]`).forEach((el, index) => {
          if (index >= min) {
            el.remove();
          }
        });
      }
    });
  });
  observer.observe(wrapperDiv, {
    attributes: true,
    attributeFilter: ['data-min'],
  });
}

export default function transferRepeatableDOM(formDef, form) {
  form.querySelectorAll('[data-repeatable="true"]').forEach((el) => {
    const imDiv = document.createElement('div');
    const min = +el.dataset.min || 1;
    imDiv.setAttribute('data-min', el.dataset.min || 1);
    if (el.dataset.max) {
      imDiv.setAttribute('data-max', el.dataset.max);
    }
    el.insertAdjacentElement('beforebegin', imDiv);
    imDiv.id = `${el.id}-im`;
    imDiv.append(el);
    handleMinChange(imDiv);
    el.setAttribute('data-im', imDiv.id);
    el.removeAttribute('data-repeatable');
    el.removeAttribute('data-min');
    el.removeAttribute('data-max');
    const addLabel = 'Add';
    const addButton = createButton(addLabel, 'add');
    addButton.addEventListener('click', add(imDiv, form));
    imDiv['#repeat-template'] = el.cloneNode(true);
    imDiv['#repeat-template-label'] = el.querySelector(':scope>.field-label').textContent;
    imDiv.className = 'form-repeat-wrapper';
    imDiv.append(addButton);
    if (min === 0) {
      el.remove();
    } else if (min === 1) {
      updateIds(el, 0, imDiv['#repeat-template-label']);
    } else {
      for (let i = 0; i < min - 1; i += 1) {
        addButton.click();
      }
    }
  });
}
