export async function applyRuleEngine(htmlForm, worker) {
  htmlForm.addEventListener('input', (e) => {
    const field = e.target;
    const { id, value } = field;
    const payload = { id };
    if (field.type === 'checkbox') {
      payload.checked = field.checked;
    } else {
      payload.value = value;
    }
    worker.postMessage({
      name: 'change',
      payload,
    });
  });
}

function handleRuleEngineEvent(e) {
  const { data: { name, id, payload } } = e;
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
  console.time('enableRuleEngine');
  const myWorker = new Worker('/blocks/aemform/rules/RuleEngineWorker.js', { type: 'module' });

  myWorker.postMessage({
    name: 'init',
    payload: formDef,
  });

  return new Promise((resolve) => {
    myWorker.addEventListener('message', (e) => {
      console.log('message received from worker', e);
      if (e.data.name === 'init') {
        console.timeEnd('enableRuleEngine');
        const form = renderHTMLForm(e.data.payload);
        applyRuleEngine(form, myWorker);
        resolve(form);
      } else {
        handleRuleEngineEvent(e);
      }
    });
  });
}
