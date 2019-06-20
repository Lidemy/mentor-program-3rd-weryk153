/* eslint-disable no-alert */
const zone = document.querySelector('.zone');
const btn = document.querySelector('.btn');

let time;
let sec;
let starttime;
let endtime;
let score;

function start() {
  time = setTimeout(() => {
    zone.classList.add('active');
    zone.classList.add('toggle');
  }, 1000 * sec);
}
function stop() {
  clearTimeout(time);
}

btn.addEventListener('click', () => {
  btn.classList.add('none');
  zone.classList.remove('active');
  zone.classList.remove('invalid');
  starttime = Date.now() / 1000;
  sec = Math.random().toFixed(2) * 2 + 1;
  start();
  zone.addEventListener('click', () => {
    if (document.querySelector('.toggle')) {
      endtime = Date.now() / 1000;
      score = ((endtime - starttime) - sec).toFixed(2);
      alert(`你的成績 ： ${score}秒`);
      btn.classList.remove('none');
      zone.classList.remove('toggle');
      zone.classList.add('invalid');
    }
    if (!document.querySelector('.toggle') && !document.querySelector('.invalid')) {
      stop();
      alert('還沒變色喔，失敗！');
      btn.classList.remove('none');
      zone.classList.add('invalid');
    }
  });
});

/*
const zone = document.querySelector('.zone');
const btn = document.querySelector('.btn');

let time;
let sec;
let starttime;
let endtime;
let score;

function start() {
  time = setTimeout(() => {
    zone.classList.add('active');
  }, 1000 * sec);
}
function stop() {
  clearTimeout(time);
}

btn.addEventListener('click', () => {
  zone.classList.remove('invalid');
  zone.classList.remove('active');
  starttime = Date.now() / 1000;
  sec = Math.random().toFixed(2) * 2 + 1;
  start();
  btn.classList.add('none');
  zone.addEventListener('click', (e) => {    //把zone.addEventListener寫進btn.addEventListener裡面會發生問題。
    if (document.querySelector('.active')) {
      endtime = Date.now() / 1000;
      score = ((endtime - starttime) - sec).toFixed(2);
      alert(`你的成績 ： ${score}秒`);
      btn.classList.remove('none');
      zone.classList.add('invalid');
    }
  });
});
zone.addEventListener('click', (e) => {
  if (document.querySelector('.invalid')) {
    e.stopImmediatePropagation();
  }
});
*/
