function twice (num) {
  let value = num.toString();

  if (value.length % 2 === 0 && isDouble(value)) {
    return num;
  } else {
    return num * 2;
  }
}

function isDouble (value) {
  let isItDouble = false;

  for (let count = 0; count < (value.length / 2); count++) {
    isItDouble = (value[count] === value[(value.length / 2) + count]);

    if (!isItDouble) {
      break;
    }
  }

  return isItDouble;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676
console.log(twice(357347));      // 714694 (My own test for an edge case)