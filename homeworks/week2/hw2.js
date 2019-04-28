/*
function capitalize(str) {
    const str1 = str;
    if (str1[0] >= 'a' && str1[0] <= 'z') {
        const str1Code = str1.charCodeAt(0);
        var str2 = String.fromCharCode(str1Code - 32);
        var str = str.replace(str1[0], str2);
        return str;
    }
    return str;
}

console.log(capitalize('hello'));
*/

function capitalize(str) {
  const str1 = str;
  if (str1[0] >= 'a' && str1[0] <= 'z') {
    const upperCase = str[0].toUpperCase();
    const newstr = str.replace(str1[0], upperCase);
    return newstr;
  }
  return str;
}

console.log(capitalize('hello'));
