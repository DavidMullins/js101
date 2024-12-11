function logInBox (str) {
  let boxWidth = str.length + 2;
  let dashRepeater = '-';
  let spaceRepeater = ' ';

  console.log(`+${dashRepeater.repeat(boxWidth)}+`);
  console.log(`|${spaceRepeater.repeat(boxWidth)}|`);
  console.log(`| ${str} |`);
  console.log(`|${spaceRepeater.repeat(boxWidth)}|`);
  console.log(`+${dashRepeater.repeat(boxWidth)}+`);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');