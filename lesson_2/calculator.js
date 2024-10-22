const readline = require('readline-sync');

console.log('Welcome to the calculator!');

// Ask user for first number
console.log("What's your first number?");
let num1 = Number(readline.question());

// Ask user for second number
console.log("What's your second number?");
let num2 = Number(readline.question());

// Ask user for operand
console.log(
  'Which operation would you like to perform?' + 
  '\n1) Add 2) Subtract 3) Multiply 4) Divide'
);
let operation = readline.question();

// Perform the operation chosen on the 2 numbers given
let output;
if (operation === '1') {
  output = num1 + num2;
} else if (operation === '2') {
  output = num1 - num2;
} else if (operation === '3') {
  output = num1 * num2;
} else if (operation === '4') {
  output = num1 / num2;
} else {
  console.log('You did not select a valid operation.');
}

// Output the solution
console.log(`Your answer is: ${output}`);
