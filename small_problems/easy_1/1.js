function isOdd (num) {
  let absoluteValue = Math.abs(num);
  if (absoluteValue % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(-8));
console.log(isOdd(0));
console.log(isOdd(7));