let munstersDescription = "The Munsters are creepy and spooky.";

let mDArr = munstersDescription.split("");
mDArr = mDArr.map(function (letter) {
  if (letter === letter.toUpperCase()) {
    return letter.toLowerCase();
  } else {
    return letter.toUpperCase();
  }
}).join("")

console.log(mDArr);