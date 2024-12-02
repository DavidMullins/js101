let famousWords = "seven years ago...";

famousWords = "Four score and " + famousWords;
console.log(famousWords);

famousWords = "seven years ago..."; // resetting for next test
console.log(famousWords);

let famousOpening = "Four score and"
famousWords = famousOpening.concat(' ', famousWords);
console.log(famousWords);