export function createLabel(fd, tagName = 'label') {
  const label = document.createElement(tagName);
  label.setAttribute('for', fd.id);
  label.className = 'field-label';
  label.textContent = fd.label?.value || fd.label || '';
  if (fd.tooltip) {
    label.title = fd.tooltip;
  }
  return label;
}

export function createFieldWrapper(fd, tagName = 'div') {
  const fieldWrapper = document.createElement(tagName);
  const nameStyle = fd.name ? ` form-${fd.name}` : '';
  const fieldId = `form-${fd.fieldType}-wrapper${nameStyle}`;
  fieldWrapper.className = fieldId;
  if (fd.required === true) {
    fieldWrapper.dataset.required = '';
  }
  if (fd.visible === false) {
    fieldWrapper.dataset.visible = 'false';
  }
  fieldWrapper.classList.add('field-wrapper');
  fieldWrapper.append(createLabel(fd));
  return fieldWrapper;
}

export function createButton(fd) {
  const wrapper = createFieldWrapper(fd);
  const button = document.createElement('button');
  button.textContent = fd.label?.value || fd.label || '';
  button.type = fd.buttonType || 'button';
  button.classList.add('button');
  button.id = fd.id;
  button.name = fd.name;
  wrapper.replaceChildren(button);
  return wrapper;
}

export function getItems(container) {
  return container[':itemsOrder'].map((x) => container[':items'][x]);
}
