function enough(cap, on, wait) {
  const numCantFit = Math.max(0, on + wait - cap);
  return numCantFit;
}
