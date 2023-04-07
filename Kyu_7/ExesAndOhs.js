function XO(str) {
  str = str.toLowerCase();

  let numX = 0;
  let numO = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === 'x') {
      numX++;
    } else if (str[i] === 'o') {
      numO++;
    }
  }

  return numX === numO;
}
