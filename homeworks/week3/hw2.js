function alphaSwap(str) {
  let result = '';
  for (let i = 0; i <= str.length - 1; i += 1) {
    if (str[i] >= 'a' && str[i] <= 'z') {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}

console.log(alphaSwap(',hEllO122'));

module.exports = alphaSwap;
