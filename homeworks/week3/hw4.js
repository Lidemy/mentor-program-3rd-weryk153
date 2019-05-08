function isPalindromes(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    result += str[i];
  }
  return result === str;
}
console.log(isPalindromes('abcba'));

module.exports = isPalindromes;
