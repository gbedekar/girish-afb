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
    let totalFormSubmit = 0;
    if ((Object.hasOwn(window, flag) && window[flag] === true) || !Object.hasOwn(window, flag)) {
      window.setTimeout(makeList, 1000);
    } else if (Object.hasOwn(window, flag) && window[flag] === false) {
      // query complete, hide loading graphic
      const {data} = window.dashboard[endpoint].results;

      const listGridContainer = document.createElement('div');
      listGridContainer.classList.add('grid', 'list', 'container');

      const cols = ['url', 'views', 'formsubmission','usrexp', 'avglcp', 'avgcls', 'avgfid', 'avginp'];
      const metrics = ['s', '', 'ms', 'ms'];
      const ranges = {
        avglcp: [2500, 4000],
        avgfid: [100, 300],
        avginp: [200, 500],
        avgcls: [0.1, 0.25],
      };
      const promises = [];

      for (let i = 0; i < data.length; i += 1) {
        const submitPromise = queryRequest(endpoint, getUrlBase(endpoint), 'submit', `${data[i]['url']}`);
        const cwvPromise = queryRequest("rum-dashboard", getUrlBase("rum-dashboard"), 'cwv', `${data[i]['url']}`);

        // Add promises to the array
        promises.push(submitPromise, cwvPromise);
      }
      const formslist = new Set();
      const domains = window.dashboard["domains"];
      console.log("domains");
      console.log(domains);
      for (let value of domains) {
        console.log(value);
        await queryRequest(endpoint, getUrlBase(endpoint), 'submit', value);
        const submitData  = window.dashboard[endpoint+"-"+value].results.data;
        for(let k= 0; k < submitData.length ; k += 1){
          if(".form".indexOf(`${submitData[k]['source']}`) !== -1) {
            totalFormSubmit += Number(submitData[k]['actions']);
            console.log("totalFormSubmit");
            console.log(totalFormSubmit);
            formslist.add(submitData[k]['url']);
          }
        }
      }
      console.log("formslist");
      console.log(formslist);

      const response = await Promise.all(promises);
      const listGridHeadingRow = document.createElement('div');
      listGridHeadingRow.classList.add('grid', 'list', 'row', 'heading');
      for (let j = 0; j < 8; j += 1) {
        const listGridHeadings = document.createElement('div');
        if (cols[j] === 'url') {
          listGridHeadings.textContent = 'Path';
        } else if (cols[j] === 'views') {
          listGridHeadings.textContent = 'Form Views';
        } else if (cols[j] === 'formsubmission') {
          listGridHeadings.textContent = 'Form Submission';
        } else  if (cols[j] === 'usrexp') {
          listGridHeadings.textContent = 'Core Web Vitals across visits';
        } else if (cols[j] === 'avglcp') {
          listGridHeadings.textContent = 'LCP 75P';
        } else if (cols[j] === 'avgcls') {
          listGridHeadings.textContent = 'CLS 75P';
        } else if (cols[j] === 'avgfid') {
          listGridHeadings.textContent = 'FID 75P';
        } else if (cols[j] === 'avginp') {
          listGridHeadings.textContent = 'INP 75P';
        }
        listGridHeadings.classList.add('grid', 'list', 'col', 'heading');
        listGridHeadingRow.appendChild(listGridHeadings);
      }
      listGridContainer.appendChild(listGridHeadingRow);

      let counter = 0;
      for (let i = 0; i < data.length; i += 1) {
        window.dashboard["rum-dashboard"] = {};
        const listGridRow = document.createElement('div');
        listGridRow.classList.add('grid', 'list', 'row');
        if ((i % 2) === 1) {
          listGridRow.classList.add('odd');
        }
        for (let j = 0; j < 8; j += 1) {
          const listGridColumn = document.createElement('div');
          listGridColumn.classList.add('grid', 'list', 'col', cols[j]);
          let txtContent;
          if (cols[j] === 'url') {
            listGridColumn.innerHTML = `<a href='${data[i][cols[j]]}' target="_blank">${data[i][cols[j]].replace(/^https?:\/\/[^/]+/i, '')}</a>`;
          } else if (cols[j] === 'formsubmission') {
            const submitData  = window.dashboard[endpoint+"-"+`${data[i]['url']}`].results.data;
            for(let k= 0; k < submitData.length ; k += 1){
                if(submitData[k]['url'] === `${data[i]['url']}`  && ".form".indexOf(`${submitData[k]['source']}`) !== -1){
                  txtContent = submitData[k]['actions'];
                  listGridColumn.textContent = txtContent;
                  break;
                }
            }
            if(listGridColumn.textContent === '' || listGridColumn.textContent === undefined){
              listGridColumn.textContent = '0';
            }
          } else if(cols[j] === 'views') {
            txtContent = data[i][cols[j]];
            listGridColumn.textContent = txtContent;
          }
          else {
               if(window.dashboard["rum-dashboard"+"-"+`${data[i]['url']}`].results === undefined){
                 await queryRequest("rum-dashboard", getUrlBase("rum-dashboard"), 'cwv', `${data[i]['url']}`);
               }
            console.log(window);
            const cwvData  = window.dashboard["rum-dashboard"+"-"+`${data[i]['url']}`].results.data;
            let cwvValue = {};
            for(let k= 0; k < cwvData.length ; k += 1){
              console.log(cwvData[k]['url']);
              console.log(data[i]['url']);
              if(cwvData[k]['url'] === `${data[i]['url']}` && ".form".indexOf(`${data[i]['source']}`) !== -1){
               cwvValue = cwvData[k];
                break;
              }
            }
            const {
              lcpgood, lcpbad, clsgood, clsbad, fidgood, fidbad, inpgood, inpbad,
            } = cwvValue;

            const lcpOkay = 100 - (lcpgood + lcpbad);
            const clsOkay = 100 - (clsgood + clsbad);
            const fidOkay = 100 - (fidgood + fidbad);
            const inpOkay = 100 - (inpgood + inpbad);
            let noresult;
            if ((lcpgood + lcpbad + clsgood + clsbad + fidgood + fidbad + inpgood + inpbad) === 0) {
              noresult = true;
            }
            const avgOkay = Math.round((lcpOkay + clsOkay + fidOkay + inpOkay) / 4);
            const avgGood = Math.round((lcpgood + clsgood + fidgood + inpgood) / 4);
            const avgBad = Math.round((lcpbad + clsbad + fidbad + inpbad) / 4);
            if (cols[j] === 'usrexp') {
              const badPerc = document.createElement('div');
              const goodPerc = document.createElement('div');
              const okayPerc = document.createElement('div');
              if (!noresult) {
                badPerc.classList.add('grid', 'list', 'col', cols[j], 'badbar');
                goodPerc.classList.add('grid', 'list', 'col', cols[j], 'goodbar');
                okayPerc.classList.add('grid', 'list', 'col', cols[j], 'okaybar');
                const badPercentage = `${avgBad}%`;
                const goodPercentage = `${avgGood}%`;
                const okayPercentage = `${avgOkay}%`;
                badPerc.textContent = badPercentage;
                goodPerc.textContent = goodPercentage;
                okayPerc.textContent = okayPercentage;
                badPerc.style.width = badPercentage;
                goodPerc.style.width = goodPercentage;
                okayPerc.style.width = okayPercentage;
                if (avgBad < 10) badPerc.style.color = 'red';
                if (avgGood < 10) goodPerc.style.color = 'green';
                if (avgOkay < 10) okayPerc.style.color = 'orange';
                listGridColumn.appendChild(goodPerc);
                listGridColumn.appendChild(okayPerc);
                listGridColumn.appendChild(badPerc);
              } else {
                const noresultPerc = document.createElement('div');
                noresultPerc.classList.add('grid', 'list', 'col', cols[j], 'noresultbar');
                const noresultPercentage = '100%';
                noresultPerc.textContent = 'Not Enough Traffic';
                noresultPerc.style.width = noresultPercentage;
                listGridColumn.appendChild(noresultPerc);
              }
            }
            else {
              let txtContent;
              if (cols[j] === 'avglcp') {
                txtContent = cwvValue[cols[j]] / 1000.00;
              } else {
                txtContent = cwvValue[cols[j]];
              }
              if (j >= 4) {
                if (data[i][cols[j]] && data[i][cols[j]] <= ranges[cols[j]][0]) {
                  listGridColumn.classList.toggle('pass');
                } else if (
                    data[i][cols[j]] > ranges[cols[j]][0] && data[i][cols[j]] < ranges[cols[j]][1]
                ) {
                  listGridColumn.classList.toggle('okay');
                } else if (!data[i][cols[j]]) {
                  listGridColumn.classList.toggle('noresult');
                } else {
                  listGridColumn.classList.toggle('fail');
                }
              }
              if (txtContent) {
                if (j >= 4) {
                  const numb = parseFloat(txtContent).toFixed(2).toLocaleString('en-US');
                  const displayedNumb = numb.endsWith('.00') ? numb.replace('.00', '') : numb;
                  listGridColumn.textContent = `${displayedNumb}${metrics[j - 4]}`;
                } else {
                  listGridColumn.textContent = txtContent;
                }
              } else if (j >= 4) {
                listGridColumn.textContent = 'n/a';
              }
            }
          }
          listGridRow.append(listGridColumn);
        }
        listGridContainer.append(listGridRow);

        counter = i;
      }
      block.append(listGridContainer);
      hideLoader(block);
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
    console.log("totalFormSubmit");
    console.log(totalFormSubmit);
  };

  getQuery();
  makeList();
}
