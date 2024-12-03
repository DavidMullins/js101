function isColorValid1(color) {
  return (color === "blue" || color === "green");
}

function isColorValid2(color) {
  return ["blue", "green"].includes(color);
  
  // This one I had to look at solution to figure out
}

console.log(isColorValid1("blue"));
console.log(isColorValid1("orange"));

console.log(isColorValid2("blue"));
console.log(isColorValid2("orange"));