function factors(number) {
  let divisor = number;
  let factors = [];
  
  if (number <= 0) {
    console.log('Your number must be greater than 0. Exiting function.');
    return;
  }

  while (divisor > 0) {
    if (number % divisor === 0) {
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  
  return factors;
}

console.log(factors(120));