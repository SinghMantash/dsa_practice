// Function to count palindromic substrings using the Expand Around Center approach
function countSubstrings(s) {
    // Helper function to expand around the center and count palindromes
    function expandAroundCenter(left, right) {
      let count = 0;
      
      // While within bounds and characters are equal (palindrome condition)
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        count++; // Found a palindrome, increase the count
        left--;  // Move left pointer one step to the left
        right++; // Move right pointer one step to the right
      }
      
      return count;
    }
  
    let result = 0;
  
    // Iterate through each character and also check between characters for even-length palindromes
    for (let i = 0; i < s.length; i++) {
      // Check for odd-length palindromes (single character center)
      result += expandAroundCenter(i, i);
      
      // Check for even-length palindromes (two character center)
      result += expandAroundCenter(i, i + 1);
    }
  
    return result;
  }
  
  // Example usage
  console.log(countSubstrings("pqrp")); // Output: 4 ("p", "q", "r", "p")
  console.log(countSubstrings("abba")); // Output: 6 ("a", "b", "b", "a", "bb", "abba")
  console.log(countSubstrings("abc")); // Output: 3 ("a", "b", "c")
  