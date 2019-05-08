function printStars(i) {
  let result = '';
  for (let j = 1; j <= i; j += 1) {
    result += '*';
  }
  return result;
}

function stars(n) {
  const arr = [];
  for (let i = 1; i <= n; i += 1) {
    arr.push(printStars(i));
  }
  return arr;
}

module.exports = stars;
