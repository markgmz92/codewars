function consecutive(arr) {
  const sortedArr = arr.sort((a, b) => a - b); // sort the array in ascending order
  let count = 0;
  for (let i = 0; i < sortedArr.length - 1; i++) {
    const diff = sortedArr[i + 1] - sortedArr[i] - 1;
    count += diff;
  }
  return count;
}
