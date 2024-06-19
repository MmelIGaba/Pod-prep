function gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  }
  
  // Example usage
  const num1 = 18;
  const num2 = 30;
  const gcdValue = gcd(num1, num2);
  console.log(`GCD of ${num1} and ${num2} is: ${gcdValue}`);
  