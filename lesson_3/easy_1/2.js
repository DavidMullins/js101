let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function endsWithExclamation (str) {
  return str.endsWith("!");
}

console.log(endsWithExclamation(str1));
console.log(endsWithExclamation(str2));