const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}
// Welcome the user
prompt('Welcome to the mortgage calculator!');

// Ask user for loan amount
prompt('To start, please type the amount of your loan:');
let loanAmount = Math.abs(Number(readline.question()));

// Verify user input wasn't a string or empty string
while (!loanAmount) {
  prompt("Oops! It looks like you didn't enter a number. " +
     "Please try again and only enter numbers:");
  loanAmount = Math.abs(Number(readline.question()));
}

// Ask user for APR
prompt('Next, please type your APR (without the % sign):');
let apr = Math.abs(Number(readline.question()));

// Trigger this if user's input is a string or includes a decimal value

outerloop: /* Looked this up to be able to break out of whole loop from
within nested loop or restart at outer loop */

while (!apr || (apr % 1 !== 0)) {
  if (!apr) { // Trigger when user's input is not a number
    prompt("Oops! It looks like you didn't enter a number. " +
      "Please try again and only enter numbers:");
    apr = Math.abs(Number(readline.question()));
  } else { // Trigger when user's input includes a decimal
    let correctResponse = false;

    // Did the user mean to include a decimal?
    prompt(`You entered an APR of ${apr}%. Is this correct? \n
      Enter YES (Y) or NO (N):`);
    let yesOrNo = readline.question().toUpperCase();

    while (correctResponse === false) {
      if ((yesOrNo === 'Y') || (yesOrNo === 'YES')) { // Trigger if Yes
        correctResponse = true;
        break outerloop; // Break to outerloop to re-check everything
      } else if ((yesOrNo === 'N') || (yesOrNo === 'NO')) { // Trigger if No
        prompt('Please re-type your APR (without the % sign):');
        apr = Math.abs(Number(readline.question()));
        continue outerloop; // Break to outerloop to recheck
      } else {
        prompt("Oops! It looks like you didn't type Y or N. " +
          "Please try again:");
        yesOrNo = readline.question().toUpperCase();
      }
    }
  }
}

/* NOTE: Purposely made this a bit verbose for above loop to challenge myself
 to work through the logic of most of the edge cases */

// Ask user for duration of the loan in months
prompt('Next, please type your duration of the loan in # of months:');
let loanDuration = Math.abs(Number(readline.question()));

while (!loanDuration) {
  prompt("Oops! It looks like you didn't enter a number. " +
     "Please try again and only enter numbers:");
  loanDuration = Math.abs(Number(readline.question()));
}

// Calculate Monthly Interest Rate
let monthlyRate = (apr / 100) / 12;

// Calculate monthly payment
let monthlyPayment = loanAmount *
(monthlyRate / (1 - Math.pow((1 + monthlyRate), (-loanDuration))));
monthlyPayment = monthlyPayment.toFixed(2);

// Tell user their monthly payment
prompt(`Thank you. Your monthly payment will be: $${monthlyPayment}`);