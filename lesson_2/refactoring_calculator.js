const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

prompt('Welcome to the calculator!');

// Ask user for first number
prompt("What's your first number?");
let num1 = readline.question();

while (invalidNumber(num1)) {
  prompt("That doesn't look like a valid number. Try again:");
  num1 = readline.question();
}

// Ask user for second number
prompt("What's your second number?");
let num2 = readline.question();

while (invalidNumber(num2)) {
  prompt("That doesn't look like a valid number. Try again:");
  num2 = readline.question();
}

// Ask user for operand
prompt(
  'Which operation would you like to perform?' +
  '\n1) Add 2) Subtract 3) Multiply 4) Divide'
);
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('You must choose 1, 2, 3, or 4. Try again:');
  operation = readline.question();
}

// Perform the operation chosen on the 2 numbers given
let output;
switch (operation) {
  case '1':
    output = Number(num1) + Number(num2);
    break;
  case '2':
    output = Number(num1) - Number(num2);
    break;
  case '3':
    output = Number(num1) * Number(num2);
    break;
  case '4':
    output = Number(num1) / Number(num2);
    break;
}

// Output the solution
prompt(`Your answer is: ${output}`);
