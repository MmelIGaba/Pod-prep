function highestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return highestCommonDivisor(b, a % b);
}
const a = 200;
const b = 150;
console.log(highestCommonDivisor(a, b)); // 50
