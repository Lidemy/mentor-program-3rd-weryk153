/*
const request = require('request');

for (let i = 25; i < 215; i += 1) {
  request.delete(`https://lidemy-book-store.herokuapp.com/posts/${i}`);
}
*/
function isUpperCase(str) {
  const words = str[0];
  if (words === words.toUpperCase()) {
    return true;
  }
  return false;
}
console.log(isUpperCase('gBCD'));
