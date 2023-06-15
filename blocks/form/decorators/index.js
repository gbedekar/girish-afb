/**
 * decorate the form, modify html input types with custom elements,
 * but keep the original in case you want
 * to use the default submit action
 * @param {HTMLFormElement} form
 */
// eslint-disable-next-line no-unused-vars, no-empty-function
export async function decorate(form) {}

/**
 * The function should take the form and original request
 * containing the headers, body and url to submit.
 * It can transform any of these objects and return all of them and the form block will
 * make a request to the url.
 * To prevent the actual subimssion return false from this function.
 * @param {HTMLFormElement} form html form element
 * @param {object} origRequest Object containing body, headers and url for submission
 */
// eslint-disable-next-line no-unused-vars
export async function transformRequest(origRequest, form) {
  const { body, headers, url } = origRequest;
  const { data } = JSON.parse(body);
  return { body: JSON.stringify({ data }), headers, url };
}
