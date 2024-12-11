function isAlpha (char) {
  if (char !== undefined) { // Need to to catch when nextChar being passed in is undefined.
  let charCode = char.charCodeAt(0);
  return ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122));
  }
}

function cleanUp (str) {
  let newStr = '';

  for (let index = 0; index < str.length; index++) {
    currentChar = str[index];
    nextChar = str[index + 1];

    if (isAlpha(currentChar)) {
      newStr += currentChar;
    } else {
      // Check if next char is alpha
      if (isAlpha(nextChar)) {
      // if yes, add a space
      newStr += ' ';
      }
    }
  }

  console.log(newStr);
}

cleanUp("---what's my +*& line?");    // " what s my line "