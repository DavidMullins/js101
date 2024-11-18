let readlineSync = require("readline-sync");

console.log("What is your age? ");
let age = Number(readlineSync.prompt());

console.log("At what age would you like to retire? ");
let retirementAge = Number(readlineSync.prompt());

let today = new Date();
let currentYear = today.getFullYear();
let retirementYear = currentYear + (retirementAge - age);

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${retirementYear - currentYear} years of work to go!`);