function power(a, b) {
    if (b === 0) return 1; // Base case: any number raised to 0 is 1
    if (b < 0) return power(1 / a, -b); // Handle negative exponents
    return a * power(a, b - 1); // Recursively multiply by a
  }
  
  // Example usage
  const base = 2;
  const exponent = 4;
  const result = power(base, exponent);
  console.log(`${base} raised to the power of ${exponent} is: ${result}`);
  