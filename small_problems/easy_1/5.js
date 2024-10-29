let readlineSync = require("readline-sync");

function findSum (int) {
  let sum = 0;
  for (let num = int; num > 0; num--) {
    sum += num;
  }
  return sum;
}

function findProduct (int) {
  let product = 1;
  for (let num = int; num > 0; num--) {
    product *= num;
  }
  return product;
}

console.log('Please enter an integer greater than 0:');
let chosenInteger = Number(readlineSync.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product.');
let sumOrProduct = readlineSync.prompt().toLowerCase();

if (sumOrProduct === 's') {
  let answer = findSum(chosenInteger);
  console.log(`The sum of the integers between 1 and ${chosenInteger} is ${answer}`);
} else {
  let answer = findProduct(chosenInteger);
  console.log(`The sum product the integers between 1 and ${chosenInteger} is ${answer}`);
}