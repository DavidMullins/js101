let phrase = 'The Flintstones Rock';

for (let count = 1; count < 11; count += 1) {
  console.log(phrase.padStart((phrase.length + count), ' '));
}