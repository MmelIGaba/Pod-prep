function sumOfDigits(n) {
    if (n === 0) return 0; // Base case: sum is 0 for 0
    return n % 10 + sumOfDigits(Math.floor(n / 10)); // Recursively add the last digit and sum of remaining digits
  }
  
  // Example usage
  const number = 1234;
  const digitSum = sumOfDigits(number);
  console.log(`Sum of digits in ${number} is: ${digitSum}`);
  