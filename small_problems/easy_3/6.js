let readline = require('readline-sync');

console.log('Enter a noun:');
let noun = readline.prompt();

console.log('Enter a verb:');
let verb = readline.prompt();

console.log('Enter an adjective:');
let adj = readline.prompt();

console.log('Enter an adverb:');
let adverb = readline.prompt();

function madlib (noun, verb, adj, adverb) {  
  console.log(`Do you ${verb} your ${adj} ${noun} ${adverb}? That's hilarious!`);
  console.log(`The ${adj} ${noun} ${verb}s ${adverb} over the lazy dog.`);
  console.log(`The ${noun} ${adverb} ${verb}s up ${adj} Joe's turtle.`);
}

madlib(noun, verb, adj, adverb);