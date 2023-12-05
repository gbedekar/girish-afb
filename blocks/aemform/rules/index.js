export async function applyRuleEngine(htmlForm, postMessage) {
  htmlForm.addEventListener('input', (e) => {
    const field = e.target;
    const { id, value } = field;
    const payload = { id };
    if (field.type === 'checkbox') {
      payload.checked = field.checked;
    } else {
      payload.value = value;
    }
    postMessage({
      data: {
        name: 'change',
        payload,
      },
    });
  });
}

function handleRuleEngineEvent(e) {
  const { name, id, payload } = e;
  if (name === 'change') {
    const { changes } = payload;
    changes.forEach((change) => {
      const { property, currentValue } = change;
      const field = document.getElementById(id);
      if (property === 'required' && currentValue === true) {
        field.closest('.field-wrapper').dataset.required = '';
      } else {
        field.closest('.field-wrapper').removeAttribute('data-required');
      }
    });
  }
}

export async function enableRuleEngine(formDef, renderHTMLForm) {
  const { postMessage } = await import('./RuleEngineWorker.js');

  return new Promise((resolve) => {
    postMessage({
      data: {
        name: 'init',
        payload: formDef,
      },
    }, (e) => {
      const form = renderHTMLForm(e.payload);
      applyRuleEngine(form, postMessage);
      resolve(form);
    });
  });
}
