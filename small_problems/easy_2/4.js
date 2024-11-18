function multiply (num1, num2) {
  return num1 * num2;
}

function square (number) {
  return multiply(number, number);
}

console.log(square(5) === 25);
console.log(square(-8) === 64);