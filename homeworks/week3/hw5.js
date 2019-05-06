function add(aa, bb) {
  let result = '';
  let carry = 0;
  let a;
  let b;
  if (aa.length >= bb.length) {
    a = aa;
    b = bb;
  } else {
    b = aa;
    a = bb;
  }
  for (let i = 1; i <= a.length; i += 1) {
    let addTo = parseInt(a[a.length - i], 10)
    + ((b.length - i >= 0) ? parseInt(b[b.length - i], 10) : 0) + carry;
    if (addTo >= 10) {
      addTo -= 10;
      result += addTo.toString(10);
      carry = 1;
    } else {
      result += addTo.toString(10);
      carry = 0;
    }
  }

  if (carry === 1) result += '1';
  return result.split('').reverse().join('');
}

console.log(add('600', '500'));

module.exports = add;
