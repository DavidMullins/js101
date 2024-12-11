function stringy (lengthInt) {
  let alternatingString = '';
  
  for (let count = 1; count <= lengthInt; count++) {
    if (count % 2 !== 0) {
      alternatingString += '1';
    } else {
      alternatingString += '0';
    }
  }

  return alternatingString; 
}

console.log(stringy(6));    // "101010"
console.log(stringy(9));    // "101010101"
console.log(stringy(4));    // "1010"
console.log(stringy(7));    // "1010101"