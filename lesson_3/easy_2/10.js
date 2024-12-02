let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

console.log(statement1.split('').filter(character => character === 't').length);
console.log(statement2.split('').filter(character => character === 't').length);