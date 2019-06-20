/* eslint-disable max-len */
/* eslint-disable no-alert */
const input = document.querySelectorAll('.need');
const necessary = document.querySelectorAll('.necessary');
const sub = document.querySelector('input[type=submit]');
const optm = document.querySelector('.opt-main');
const invalid = document.querySelectorAll('.invalid');
const optInvalid = document.querySelector('.opt-invalid');
const basic = document.querySelector('#basic');
const adv = document.querySelector('#advanced');
const other = document.querySelector('.other');
let result = [];

function check() {
  result = [];
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') {
      necessary[i].classList.add('empty');
      input[i].classList.add('empty');
      invalid[i].classList.remove('none');
    } else if (input[i].value !== '') {
      necessary[i].classList.remove('empty');
      input[i].classList.remove('empty');
      invalid[i].classList.add('none');
      result.push(input[i].value);
    }
  } if (basic.checked || adv.checked) {
    optm.classList.remove('empty');
    optInvalid.classList.add('none');
  } else {
    optm.classList.add('empty');
    optInvalid.classList.remove('none');
  }
  return result;
}

sub.addEventListener('click', (e) => {
  check();
  if (result.length >= input.length && (basic.checked || adv.checked)) {
    if (basic.checked) {
      result.push('基礎班');
    } else if (adv.checked) {
      result.push('加強班');
    }
    result.push(other.value);
    console.log(result);
    alert('謝謝填答！');
  } else {
    e.preventDefault();
  }
});

/* 原先寫的
sub.addEventListener('click', (e) => {
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') {
      necessary[i].classList.add('empty');
      input[i].classList.add('empty');
      invalid[i].classList.remove('none');
      e.preventDefault();
    } else if (input[i].value !== '') {
      necessary[i].classList.remove('empty');
      input[i].classList.remove('empty');
      invalid[i].classList.add('none');
    }
  } if (basic.checked || adv.checked) {
    optm.classList.remove('empty');
    optInvalid.classList.add('none');
  } else {
    optm.classList.add('empty');
    optInvalid.classList.remove('none');
    e.preventDefault();
  }
  if (input[0].value !== '' && input[1].value !== '' && input[2].value !== '' && input[3].value !== '' && input[4].value !== '' && (basic.checked || adv.checked)) {
    console.log(input[0].value);
    console.log(input[1].value);
    console.log(input[2].value);
    console.log(input[3].value);
    console.log(input[4].value);
    alert('謝謝填答');
  }
});
*/
/*
function check(n) {
  if (input[n].value !== '' && n < 5) {
    console.log(input[n].value);
    n += 1;
    check(n);
  }
}
check(0);
*/

// 先放著之後再改
/*
const element = document.querySelector('input');
const col = document.querySelector('.col');
element.addEventListener('blur', () => {
  console.log(element);
  if (element.value === '') {
    const div = document.createElement('div');
    div.innerHTML = '這是必填問題';
    div.classList.toggle('invalid');
    col.appendChild(div);
  }
});
// 不知為啥不行
input.forEach((item) => {
  item.addEventListener('focus', () => {
    if (item.value !== '') {
      const div = document.createElement('div');
      div.innerHTML = '這是必填問題';
      div.classList.remove('invalid');
      necessary.removeChild(div);
      necessary.classList.remove('empty');
      item.classList.remove('empty');
    }
  });
});
*/

// 原本方法
/*
const input = document.querySelectorAll('.need');
const necessary = document.querySelectorAll('.necessary');
const sub = document.querySelector('input[type=submit]');
const optm = document.querySelector('.opt-main');
const none = document.querySelector('.none');

sub.addEventListener('click', (e) => {
  for (let i = 0; i < input.length; i += 1) {
    if (input[i].value === '') {
      const div = document.createElement('div');
      div.innerHTML = '這是必填問題';
      div.classList.add('invalid');
      necessary[i].appendChild(div);
      necessary[i].classList.add('empty');
      input[i].classList.add('empty');
      e.preventDefault();
    } else if (input[i] !== '') {
      necessary[i].classList.remove('empty');
      input[i].classList.remove('empty');
    }
  } if (document.querySelector('#basic').checked || document.querySelector('#advanced').checked) {
    optm.classList.remove('empty');
    optm.classList.remove('invalid');
  } else {
    const div = document.createElement('div');
    div.innerHTML = '這是必填問題';
    div.classList.add('invalid');
    optm.appendChild(div);
    optm.classList.add('empty');
    e.preventDefault();
  }
});
*/
