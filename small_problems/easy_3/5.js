function triangle (n) {
  let string = '';
  let space = ' ';

  for (let count = 1; count <= n; count++) {
    string = '*'.repeat(count);

    console.log(`${string.padStart(n, space)}`);
  }
}

triangle(5);
triangle(9);