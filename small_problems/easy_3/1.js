function crunch (str) {
  let count = 0;
  let newText = '';

  while (count < str.length) {
    if (str[count] !== str[count + 1]) {
      newText += str[count];
    }

    count++;
  }

  console.log(newText);
  
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""