function join(str, concatStr) {
  let result = '';
  for (let i = 0; i < str.length; i += 1) {
    result += str[i];
    if (i !== str.length - 1) {
      result += concatStr;
    }
  }
  return result;
}

function repeat(str, times) {
  let result = '';
  for (let i = 1; i <= times; i += 1) {
    result += str;
  }
  return result;
}

console.log(join(['a', 'b', 'c'], '!'));
console.log(repeat('yoyo', 3));
