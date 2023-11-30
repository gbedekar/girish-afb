import { readBlockConfig } from "../../scripts/lib-franklin.js";
import {
  getQueryInfo,
  queryRequest,
  getUrlBase,
} from "../../scripts/scripts.js";
import { drawLoader, hideLoader } from "../../scripts/loader.js";

export default function decorate(block) {
  let cfg = readBlockConfig(block);
  console.log("...decorate");
  console.log(cfg);
  cfg = Object.fromEntries(Object.entries(cfg).map(([k, v]) => [k, typeof v === 'string' ? v.toLowerCase() : v]));
  console.log(cfg);
  const endpoint = 'rum-checkpoint-urls';

  cfg.block = block;
  const flag = `${endpoint}Flag`;
console.log("flag");
console.log(flag);
  // once we read config, clear the dom.
  block.querySelectorAll(':scope > div').forEach((row) => {
    row.style.display = 'none';
  });

  const getQuery = () => {
    if (!Object.hasOwn(window, 'gettingQueryInfo')) {
      console.log("test111");
      getQueryInfo();
    }
    if (Object.hasOwn(window, 'gettingQueryInfo') && window.gettingQueryInfo === true) {
      window.setTimeout(getQuery, 1);
    } else if (Object.hasOwn(window, 'gettingQueryInfo') && window.gettingQueryInfo === false) {
      setTimeout(() => {
        queryRequest(endpoint, getUrlBase(endpoint),'render');
      }, 3000);

      drawLoader(block);
    }
  };

  const makeList = async () => {
    console.log("....makelist");
    if ((Object.hasOwn(window, flag) && window[flag] === true) || !Object.hasOwn(window, flag)) {
      window.setTimeout(makeList, 1000);
    } else if (Object.hasOwn(window, flag) && window[flag] === false) {
      // query complete, hide loading graphic
      const {data} = window.dashboard[endpoint].results;
      hideLoader(block);

      const listGridContainer = document.createElement('div');
      listGridContainer.classList.add('grid', 'list', 'container');

      const cols = ['url', 'views', 'formsubmission'];
      const listGridHeadingRow = document.createElement('div');
      listGridHeadingRow.classList.add('grid', 'list', 'row', 'heading');
      for (let j = 0; j < 3; j += 1) {
        const listGridHeadings = document.createElement('div');
        if (cols[j] === 'url') {
          listGridHeadings.textContent = 'Path';
        } else if (cols[j] === 'views') {
          listGridHeadings.textContent = 'Form Views';
        } else if (cols[j] === 'formsubmission') {
          listGridHeadings.textContent = 'Form Submission';
        }
        listGridHeadings.classList.add('grid', 'list', 'col', 'heading');
        listGridHeadingRow.appendChild(listGridHeadings);
      }
      listGridContainer.appendChild(listGridHeadingRow);

      let counter = 0;
      console.log("data");
      console.log(data);
      for (let i = 0; i < data.length; i += 1) {
        const listGridRow = document.createElement('div');
        listGridRow.classList.add('grid', 'list', 'row');
        if ((i % 2) === 1) {
          listGridRow.classList.add('odd');
        }
        for (let j = 0; j < 3; j += 1) {
          const listGridColumn = document.createElement('div');
          listGridColumn.classList.add('grid', 'list', 'col', cols[j]);
          let txtContent;
          if (cols[j] === 'url') {
            listGridColumn.innerHTML = `<a href='${data[i][cols[j]]}' target="_blank">${data[i][cols[j]].replace(/^https?:\/\/[^/]+/i, '')}</a>`;
          } else if (cols[j] === 'formsubmission') {
            console.log(data[i]['url']);
            await queryRequest(endpoint, getUrlBase(endpoint), 'submit', `${data[i]['url']}`);
            const submitData  = window.dashboard[endpoint].results.data;
            console.log(submitData);
            console.log(window);
            for(let k= 0; k < submitData.length ; k += 1){
                if(submitData[k]['url'] === `${data[i]['url']}`){
                  txtContent = submitData[k]['actions'];
                  listGridColumn.textContent = txtContent;
                  break;
                }
            }
            console.log("submitData");
            console.log(window);
          } else {
            txtContent = data[i][cols[j]];
            listGridColumn.textContent = txtContent;
          }
          listGridRow.append(listGridColumn);
        }
        listGridContainer.append(listGridRow);

        counter = i;
      }
      block.append(listGridContainer);

      if (counter === 0) {
        const noresults = document.createElement('p');
        const params = new URLSearchParams(window.location.search);
        if (params.has('domainkey') && params.has('url')) {
          noresults.textContent = 'No results found.';
        } else {
          noresults.innerHTML = '<i>domainkey</i> and <i>url</i> (hostname) are required.  Please provide <a href="/">here</a>.';
        }
        block.append(noresults);
      }
    }
  };
  getQuery();
  makeList();
}
