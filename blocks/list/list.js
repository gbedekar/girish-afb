import { readBlockConfig } from "../../scripts/lib-franklin.js";
import {
  getQueryInfo,
  queryRequest,
  getUrlBase,
} from "../../scripts/scripts.js";
import { drawLoader, hideLoader } from "../../scripts/loader.js";

export default function decorate(block) {
  let cfg = readBlockConfig(block);
  cfg = Object.fromEntries(
    Object.entries(cfg).map(([k, v]) => [
      k,
      typeof v === "string" ? v.toLowerCase() : v,
    ])
  );
  const endpoint = cfg.data;

  cfg.block = block;
  const flag = `${endpoint}Flag`;

  // once we read config, clear the dom.
  block.querySelectorAll(":scope > div").forEach((row) => {
    row.style.display = "none";
  });

  const getQuery = () => {
    if (!Object.hasOwn(window, "gettingQueryInfo")) {
      getQueryInfo();
    }
    if (
      Object.hasOwn(window, "gettingQueryInfo") &&
      window.gettingQueryInfo === true
    ) {
      window.setTimeout(getQuery, 1);
    } else if (
      Object.hasOwn(window, "gettingQueryInfo") &&
      window.gettingQueryInfo === false
    ) {
      setTimeout(() => {
        queryRequest(endpoint, getUrlBase(endpoint));
      }, 3000);

      drawLoader(block);
    }
  };

  const makeList = () => {
    if (
      (Object.hasOwn(window, flag) && window[flag] === true) ||
      !Object.hasOwn(window, flag)
    ) {
      window.setTimeout(makeList, 1000);
    } else if (Object.hasOwn(window, flag) && window[flag] === false) {
      // query complete, hide loading graphic
      const { data } = window.dashboard[endpoint].results;
      hideLoader(block);

      const listGridContainer = document.createElement("div");
      listGridContainer.classList.add("grid", "list", "container");

      const cols = ["customer", "pages", "submissions"];

      const listGridHeadingRow = document.createElement("div");
      listGridHeadingRow.classList.add("grid", "list", "row", "heading");
      for (let j = 0; j < cols.length; j += 1) {
        const listGridHeadings = document.createElement("div");
        if (cols[j] === "customer") {
          listGridHeadings.textContent = "Customer";
        } else if (cols[j] === "pages") {
          listGridHeadings.textContent = "Pages";
        } else if (cols[j] === "submissions") {
          listGridHeadings.textContent = "Form Submissions";
        }
        listGridHeadings.classList.add("grid", "list", "col", "heading");
        listGridHeadingRow.appendChild(listGridHeadings);
      }

      listGridContainer.appendChild(listGridHeadingRow);


      for (let i = 0; i < data.length; i += 1) {
        const listGridRow = document.createElement("div");
        listGridRow.classList.add("grid", "list", "row");
        if (i % 2 === 1) {
          listGridRow.classList.add("odd");
        }

        const params = new URLSearchParams(window.location.search);
        const listType = params.get("listType");
        const { customer } = data[i];
        let listGridColumn = document.createElement("div");
        listGridColumn.classList.add("grid", "list", "col", "customer");
        listGridColumn.textContent = customer;
        listGridRow.appendChild(listGridColumn);

        listGridColumn = document.createElement("div");
        listGridColumn.innerHTML = `<a href="/views/rum-pageviews?${params.toString()}">Form Pages</a>`;
        listGridColumn.classList.add("grid", "list", "col", "pages");

        listGridColumn = document.createElement("div");
        listGridColumn.innerHTML = `<a href="/views/rum-pageviews?${params.toString()}">Form Submissions</a>`;
        listGridColumn.classList.add("grid", "list", "col", "pages");

        listGridContainer.append(listGridRow);
      }
      block.append(listGridContainer);
    }
  };
  getQuery();
  makeList();
}
