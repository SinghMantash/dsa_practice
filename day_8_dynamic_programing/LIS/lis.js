// Approach

// There are multiple ways to solve this problem efficiently:

// 1. Dynamic Programming (O(n²))

// Define dp[i] as the length of the LIS ending at index i.

// Iterate over all previous elements and update dp[i] accordingly.

// Time Complexity: O(n²)

// 2. Dynamic Programming with Binary Search (O(n log n))

// Use a list to store the smallest possible tail values of increasing subsequences.

// Perform binary search to efficiently update the subsequence.

// Time Complexity: O(n log n)

// Implementation

function lengthOfLIS(nums) {
    // If the input array is empty, return 0 as there is no subsequence
    if (nums.length === 0) return 0;
    
    // Initialize an array to store the length of LIS ending at each index
    let dp = new Array(nums.length).fill(1);
    let maxLength = 1; // Keep track of the maximum LIS length found
    
    // Iterate through the array to build the dp array
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            // If nums[i] is greater than nums[j], it can extend the LIS ending at j
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        // Update the overall maximum LIS length found so far
        maxLength = Math.max(maxLength, dp[i]);
    }
    
    return maxLength; // Return the maximum LIS length
}

// Example usage:
const nums = [300, 9, 2, 5, 3, 7, 500, 400];
console.log(lengthOfLIS(nums));  // Output: 4