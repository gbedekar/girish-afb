function updateRows(row, data) {
  function updateRow(r, d) {
    const tds = [...row.querySelectorAll('td')];
    tds.forEach((td) => {
      const { name } = td.dataset;
      td.innerText = d[name] == null ? '' : d[name];
    });
  }

  function createRow(d, numCols) {
    // create a tr with numCols tds
    const tr = document.createElement('tr');
    for (let i = 0; i < numCols; i += 1) {
      const td = document.createElement('td');
      tr.append(td);
    }
    updateRow(tr, d);
    return tr;
  }

  const tbody = row.parentElement;
  const rows = tbody.querySelectorAll('tr');
  const numCols = rows[0].childElementCount;
  const existing = Math.min(rows.length, data.length);
  let i = 0;
  for (i = 0; i < existing; i += 1) {
    updateRow(rows[i], data[i]);
  }
  let lastElement = rows[i - 1];
  // remove extra fieldsets
  for (; i < rows.length; i += 1) {
    rows[i].remove();
  }
  // create new fieldsets
  for (; i < data.length; i += 1) {
    const newRow = createRow(data[i], numCols);
    lastElement.insertAdjacentElement('afterend', newRow);
    lastElement = newRow;
  }
}

/**
 * converts a repeatable fieldset with a set of output fields into a table.
 * @param {*} formDef
 * @param {*} formTag
 */
export default function transformTable(formDef, formTag) {
  formTag.querySelectorAll('.form-panel1').forEach((el) => {
    const labels = el.querySelectorAll('label');
    // create a table
    const table = document.createElement('table');
    table.classList.add(`table-${el.name}`);
    table.dataset.name = el.name;
    // create a table head
    const thead = document.createElement('thead');
    // create a table body
    const tbody = document.createElement('tbody');
    table.append(thead, tbody);
    // create a header row
    const headerRow = document.createElement('tr');
    thead.append(headerRow);
    // create a body row
    const bodyRow = document.createElement('tr');
    tbody.append(bodyRow);
    // create a header cell for each label
    labels.forEach((label) => {
      const th = document.createElement('th');
      th.textContent = label.textContent;
      th.id = `${label.htmlFor}-label`;
      // label.remove();
      headerRow.append(th);
    });
    el.querySelectorAll('.field-wrapper').forEach((f) => {
      const td = document.createElement('td');
      td.innerText = f.value == null ? '' : f.value;
      td.dataset.name = f.querySelector('output').name;
      bodyRow.append(td);
    });
    bodyRow.setAttribute('data-repeatable', '');
    bodyRow.setAttribute('data-fieldsetName', el.name);
    el.parentElement.insertAdjacentElement('afterend', table);
    el.parentElement.style.display = 'none';
  });

  formTag.addEventListener('setItems', (e) => {
    const {
      item: {
        name, data,
      },
    } = e.detail;
    const tr = formTag.querySelector(`tr[data-fieldsetname="${name}"]`);
    if (tr) {
      updateRows(tr, data);
    }
  });
}
