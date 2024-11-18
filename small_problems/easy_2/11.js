function centerOf(str) {
  let stringLength = str.length;

  if (stringLength % 2 === 0) {
    let startIndex = Math.floor((stringLength / 2) - 1);
    console.log(str.slice(startIndex, (startIndex + 2)));
  } else {
    console.log(str.at(Math.floor(stringLength / 2)));
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"