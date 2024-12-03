let numbers = [1, 2, 3, 4];

// 1
numbers = [];
console.log(numbers);

//2
numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.length = 0;
console.log(numbers);

// 3
numbers = [1, 2, 3, 4];
console.log(numbers);

numbers.splice(0, numbers.length);
console.log(numbers);