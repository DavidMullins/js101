let readlineSync = require("readline-sync");

function greeting () {
  console.log('What is your name?');
  let name = readlineSync.prompt();

  if (name.endsWith("!")) {
    name = name.slice(0, (name.length - 1));
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greeting();