function century (year) {
  let centuryYear = "";
  let ending = "";

  centuryYear = Math.ceil(year/100).toString();

  switch (centuryYear.at(-1)) {
    case '0': case '4': case '5': case '6': case '7': case '8': case '9':
      ending = "th";
      break;
    case '1':
      if (endingTwo(centuryYear.slice(-2))) {
        ending = "th";
        break;
      } else {
        ending = "st";
        break;
      }
    case '2':
      if (endingTwo(centuryYear.slice(-2))) {
        ending = "th";
        break;
      } else {
        ending = "nd";
        break;
      }
    case '3':
      if (endingTwo(centuryYear.slice(-2))) {
        ending = "th";
        break;
      } else {
        ending = "rd";
        break;
      }
  }

  console.log(`${centuryYear}${ending}`);
}

function endingTwo (lastTwo) {
  if (lastTwo === '11' || lastTwo === '12' || lastTwo === '13') {
    return true;
  }
}



century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
century(11501);       // Extra Test for line 14 - "116th"