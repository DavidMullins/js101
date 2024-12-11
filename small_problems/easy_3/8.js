function getGrade (grade1, grade2, grade3) {
  let average = (grade1 + grade2 + grade3) / 3;
  console.log(average);

  if (90 <= average && average <= 100) {
    console.log('A');
  } else if (80 <= average && average < 90) {
    console.log('B');
  } else if (70 <= average && average < 80) {
    console.log('C');
  } else if (60 <= average && average < 70) {
    console.log('D');
  } else {
    console.log('F');
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"