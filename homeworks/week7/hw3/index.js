const result = document.querySelector('.result');
const num = document.querySelectorAll('.num');
const ac = document.querySelector('#AC');
const equal = document.querySelector('.equal');
const plus = document.querySelector('#plus');
const sub = document.querySelector('#sub');
const point = document.querySelector('#point');
const zero = document.querySelector('#zero');
let resArr;
let res = '';
let setZero;
let oldres;
let newres;
let sym;

num.forEach((item) => {
  item.addEventListener('click', () => {
    res += item.innerText;
    result.innerText = res;
  });
});

ac.addEventListener('click', () => {
  setZero = '0';
  res = '';
  newres = '';
  result.innerText = setZero;
});

point.addEventListener('click', () => {
  resArr = res.split('.');
  newres = '';
  if (res === '') {
    res = '0';
    res += '.';
    result.innerText = res;
  } else if (resArr.length < 2) {
    res += '.';
    result.innerText = res;
  }
});

zero.addEventListener('click', () => {
  if (res === '00') {
    res = '0';
    result.innerText = res;
    res = '';
  }
});

equal.addEventListener('click', () => {
  if (res === '') {
    newres = oldres;
    result.innerText = oldres;
  } else if (sym === '+') {
    newres = parseFloat(oldres, 10) + parseFloat(res, 10);
    result.innerText = newres;
  } else if (sym === '-') {
    newres = parseFloat(oldres, 10) - parseFloat(res, 10);
    result.innerText = newres;
  }
  res = '';
});

plus.addEventListener('click', () => {
  if (newres === 0) {
    oldres = '0';
  } else if (newres) {
    oldres = newres;
  } else if (res) {
    oldres = res;
  } else {
    oldres = '0';
  }
  result.innerText = '+';
  res = '';
  sym = '+';
});

sub.addEventListener('click', () => {
  if (newres === 0) {
    oldres = '0';
  } else if (newres) {
    oldres = newres;
  } else {
    oldres = res;
  }
  result.innerText = '-';
  res = '';
  sym = '-';
});


// 連加連減，無法+-穿插，先放著
/*
plus.addEventListener('click', () => {
  if (newres === 0) {
    oldres = '0';
  } else if (oldres && res) {
    newres = parseFloat(oldres, 10) + parseFloat(res, 10);
    result.innerText = newres;
    oldres = newres;
  } else if (res) {
    oldres = res;
  } else {
    oldres = '0';
  }
  res = '';
  sym = '+';
});

sub.addEventListener('click', () => {
  if (newres === 0) {
    oldres = '0';
  } else if (oldres && res) {
    newres = parseFloat(oldres, 10) - parseFloat(res, 10);
    result.innerText = newres;
    oldres = newres;
  } else if (newres) {
    oldres = newres;
  } else {
    oldres = res;
  }
  res = '';
  sym = '-';
});
*/
