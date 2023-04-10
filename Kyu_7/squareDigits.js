function squareDigits(num) {
  const digits = num.toString().split('');
  const squaredDigits = digits.map((digit) => digit * digit);
  return Number(squaredDigits.join(''));
}
