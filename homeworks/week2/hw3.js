/* eslint-disable indent */
/*
function reverse(str) {
    var newstr = []
    var a = str.split('')
    for (var i = str.length - 1; i >= 0; i--) {
        newstr.push(a[i])
    }
    var str = newstr.join('')
    return str;
}

console.log(reverse('1,2,3'))
*/
function reverse(str) {
    let result = [];
    for (let i = str.length - 1; i >= 0; i -= 1) {
        result += str[i];
    }
    return result;
}
console.log(reverse('hello'));
