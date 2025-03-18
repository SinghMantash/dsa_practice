function longestCommonSubsequence(text1, text2) {
    // Get the length of both input strings
    const m = text1.length;
    const n = text2.length;
    
    // Step 1: Create a 2D dynamic programming table (dp) of size (m+1) x (n+1)
    // dp[i][j] will store the length of the longest common subsequence (LCS)
    // of text1[0..i-1] and text2[0..j-1].
    // Initialize the entire table with 0, as no subsequence is common initially.
    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Step 2: Iterate through both strings to fill the dp table.
    // Outer loop goes through text1 (from index 1 to m), and
    // Inner loop goes through text2 (from index 1 to n).
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            // If the characters match, the LCS length increases by 1.
            // We use dp[i-1][j-1] because the indices in dp are shifted by 1.
            if (text1[i - 1] === text2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;  // Extend the previous LCS by 1.
            } else {
                // If the characters don't match, we take the maximum of:
                // 1. The LCS length excluding the current character from text1.
                // 2. The LCS length excluding the current character from text2.
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // Step 3: The length of the longest common subsequence is stored in dp[m][n],
    // which represents the LCS of text1[0..m-1] and text2[0..n-1].
    return dp[m][n];
}

// Example usage:

// Define the two input strings
const text1 = "pbcdq";   // String 1
const text2 = "pcq";     // String 2

// Call the function and print the result.
// Expected Output: 3, as "pcq" is the longest common subsequence.
console.log(longestCommonSubsequence(text1, text2));  // Output: 3
