function whatRandomAge() {
  let randomValue = Math.floor(Math.random() * 100);
  let minValue = 20;
  let age = minValue + randomValue;

  console.log(`Teddi is ${age} years old!`);
}

whatRandomAge();