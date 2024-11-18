let readlineSync = require("readline-sync");

function message (msg) {
  console.log(`===> ${msg}`);
}

message('Enter the first number: ');
let num1 = Number(readlineSync.prompt());

message('Enter the second number: ');
let num2 = Number(readlineSync.prompt());

message(`${num1} + ${num2} = ${num1 + num2}`);
message(`${num1} - ${num2} = ${num1 - num2}`);
message(`${num1} * ${num2} = ${num1 * num2}`);
message(`${num1} / ${num2} = ${Math.floor(num1 / num2)}`);
message(`${num1} % ${num2} = ${num1 % num2}`);
message(`${num1} ** ${num2} = ${num1 ** num2}`);