function isPrime(n) {
  let result = 0;
  for (let i = 1; i <= n; i += 1) {
    if (n === 1) return false;
    if (n % i === 0) {
      result += 1;
    }
  }
  return result < 3;
}
console.log(isPrime(2));

module.exports = isPrime;
