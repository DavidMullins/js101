function isLeapYear (year) {
  let divisibleBy4 = ((year / 4) % 1 === 0);
  let divisibleBy100 = ((year / 100) % 1 === 0);
  let divisibleBy400 = ((year / 400) % 1 === 0);
  let yearIsLeap = false;

  if (year < 1752) {
    if (divisibleBy4) {
      yearIsLeap = true;
    }
  } else if (divisibleBy4) {
    yearIsLeap = true;
    if (divisibleBy100) {
      yearIsLeap = false;
      if (divisibleBy400) {
        yearIsLeap = true;
      }
    }
  }
  return yearIsLeap;
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true