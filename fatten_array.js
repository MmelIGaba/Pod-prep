function flattenStringArray(arr) {
    const flattened = [];
    function flattenHelper(array) {
      for (const item of array) {
        if (typeof item === "string") {
          flattened.push(item);
        } else if (Array.isArray(item)) {
          flattenHelper(item); // Recursive call for nested arrays
        }
      }
    }
  
    flattenHelper(arr);
    return flattened;
  }
  
  // Example usage
  const stringArr = ["apple", ["banana", "cherry"], "mango", ["date", "fig"]];
  const flatArr = flattenStringArray(stringArr);
  console.log(flatArr); // Output: ["apple", "banana", "cherry", "mango", "date", "fig"]
  