/* eslint-disable no-param-reassign */
/*
 * The following is an as-is copy of the current amortization calculator code and should not be
 * modified without discussion with Stewart.
 *
 * When it is modified, start and end the modification with a comment block indicating what was changed
 * and why.
 */

function formatAsMoney(amount, locale, currency) {
  return (amount).toLocaleString(locale || 'en-US', {
    style: 'currency',
    currency: currency || 'USD',
  });
}

function roundToHundredths(num) { // annoying float precision forces the +0.000001
  return Math.round(parseFloat(num) * 100 + 0.000001) / 100;
}

function cleanNumber(num) {
  const val = (num && num.replace) ? num.replace(/[^\d\.\-]/g, '') : num;
  // eslint-disable-next-line eqeqeq
  if (val == '') {
    return 0;
  }
  if (Number.isFinite(val)) {
    return parseFloat(val);
  }
  return 0;
}

function cleanAndRound(num) {
  return roundToHundredths(cleanNumber(num));
}

function getNum(x) {
  if (typeof (x) === 'undefined') {
    x = 0;
  }
  x = String(x);
  x = x.replace(/[^0-9\.-]/g, '');
  x = parseFloat(x);
  if (Number.isNaN(x)) {
    x = 0;
  }
  return x;
}

export default function ammSchedule(principle, term, rate, start, isGroupByYear = false) {
  // standardize input
  principle = Math.round(getNum(principle) * 100);
  term = getNum(term);
  rate = Math.round(getNum(rate) * 1000000);
  if (rate >= 1000000) {
    rate /= 100; // change % to decimal
  }

  // static rate vars
  const monthlyRate = Math.round(rate / 12);
  const numPayments = term * 12;
  const pFactor = (1 + (monthlyRate / 1000000)) ** numPayments;
  const payment = (pFactor === 1)
    ? Math.ceil(principle / numPayments)
    : Math.ceil((principle * ((monthlyRate * pFactor) / 1000000)) / (pFactor - 1));
  const startDate = new Date(start);
  const monthly = {
    principle,
    payment,
    month: startDate.getMonth(),
    year: startDate.getFullYear(),
  };
  const yearly = {
    real: 0,
    interest: 0,
  };

  // to check : need to localize
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const data = [];
  // Fill amortResultsTable with data
  for (let n = 1; n <= numPayments; n += 1) {
    // advance a year, if app.
    if (monthly.month === 12) {
      monthly.month = 0;
      monthly.year += 1;
      yearly.real = 0;
      yearly.interest = 0;
    }

    // set date output
    monthly.date = `${months[monthly.month]} ${monthly.year}`;
    yearly.date = `Year ${monthly.year}`;

    // calc interest
    monthly.interest = Math.round((monthly.principle * monthlyRate) / 1000000);
    yearly.interest += monthly.interest;
    // totalInterest += monthly.interest;

    // adjust last payment amount, if app.
    if (monthly.principle + monthly.interest < monthly.payment) {
      monthly.payment = monthly.principle + monthly.interest;
    }

    // calc principle paid & remaining balance
    monthly.real = monthly.payment - monthly.interest;
    monthly.principle -= monthly.real;
    yearly.real += monthly.real;
    yearly.principle = monthly.principle;
    if (isGroupByYear) {
      if (monthly.month === 11 || n === numPayments) {
        data.push({
          date: yearly.date,
          real: formatAsMoney(yearly.real / 100),
          interest: formatAsMoney(yearly.interest / 100),
          principle: formatAsMoney(yearly.principle / 100),
        });
      }
    } else {
      data.push({
        date: monthly.date,
        real: formatAsMoney(monthly.real / 100),
        interest: formatAsMoney(monthly.interest / 100),
        principle: formatAsMoney(monthly.principle / 100),
      });
    }
    monthly.month += 1;
  }
  return data;
}
