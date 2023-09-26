/**
 * Excel treats dates as numbers where the integer portion is days since the epoch,
 * the fractional portion is the number hours in the day
 * @param dateObj {Date}
 * @returns {number}
 */
function datetimeToNumber(dateObj) {
  if (dateObj === null) return 0;
  // return days since the epoch
  return dateObj.getTime() / (1000 * 60 * 60 * 24);
}

function parseISODate(datevalue) {
  return new Date(datevalue);
}

export function getValueOf(a) {
  if (a === null || a === undefined) return a;
  if (Array.isArray(a)) {
    return a.map((i) => getValueOf(i));
  }
  return a.valueOf();
}

const defaultStringToNumber = ((str) => {
  if (str === null) { return 0; }
  const n = +str;
  if (!Number.isNaN(n)) { return n; }
  const date = parseISODate(str);
  if (date !== str) { return datetimeToNumber(date); }
  return 0;
});

export const numberToDate = ((num) => new Date(Math.round(num * 1000 * 60 * 60 * 24)));

export const dateToString = ((date) => date.toISOString().split('T')[0]);

export function getToNumber(debug = []) {
  return (value) => {
    const n = getValueOf(value); // in case it's an object that implements valueOf()
    if (n === null) return null;
    if (Array.isArray(n)) {
      debug.push('Converted array to zero');
      return 0;
    }
    const type = typeof n;
    if (type === 'number') return n;
    if (type === 'string') return defaultStringToNumber(n, debug);
    if (type === 'boolean') return n ? 1 : 0;
    debug.push('Converted object to zero');
    return 0;
  };
}
