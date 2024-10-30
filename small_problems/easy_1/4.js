let readlineSync = require("readline-sync");

const SQMTR_TO_SQFT = 10.7639;

console.log('Enter the length of the room in meters:');
let length = readlineSync.prompt();

console.log('Enter the width of the room in meters:');
let width = readlineSync.prompt();

let area = length * width;

console.log(`The area of the room is ${area.toFixed(2)} square meters ` +
  `(${(area * SQMTR_TO_SQFT).toFixed(2)} square feet).`);