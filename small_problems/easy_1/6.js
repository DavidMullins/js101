function shortLongShort (str1, str2) {
  let str1Length = str1.length;
  let str2Length = str2.length;

  if (str1Length > str2Length) {
    return str2 + str1 + str2;
  } else {
    return str1 + str2 + str1;
  }
}

console.log(shortLongShort('abc', 'defgh'));
console.log(shortLongShort('abcde', 'fgh'));
console.log(shortLongShort('', 'xyz'));