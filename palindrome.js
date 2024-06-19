function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z]/g, ""); // Remove non-alphanumeric characters and convert to lowercase
  
    function checkPalindrome(i, j) {
      if (i >= j) return true; // Base case: if i reaches j or goes beyond, it's a palindrome
      if (str[i] !== str[j]) return false; // If characters don't match, not a palindrome
      return checkPalindrome(i + 1, j - 1); // Recursively check characters at opposite ends
    }
  
    return checkPalindrome(0, str.length - 1);
  }
  
  // Example usage
  const text = "Racecar";
  if (isPalindrome(text)) {
    console.log(`${text} is a palindrome`);
  } else {
    console.log(`${text} is not a palindrome`);
  }
  