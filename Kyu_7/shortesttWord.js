function findShort(s) {
  const words = s.split(' ');
  const shortestLength = words.reduce((shortest, word) => {
    if (word.length < shortest) {
      return word.length;
    } else {
      return shortest;
    }
  }, Infinity);
  return shortestLength;
}
