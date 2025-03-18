// Recursive approach 

var canPartition = function(nums) {
    // Initialize the result variable to false
    let res = false;

    // Helper function to calculate the sum of elements in an array
    const getSumOfArr = (arr) => {
        let sum = 0;

        // Iterate over the array to calculate the sum of elements
        arr.map(i => {
            sum = sum + i;
        });

        return sum;
    };

    // Check if the sum of the array is odd, as an odd sum cannot be split equally
    if (getSumOfArr(nums) % 2 !== 0) return false;

    // Set the target as half of the total sum
    let target = getSumOfArr(nums) / 2;

    // Helper function to explore different subsets (recursive approach)
    const helper = (idx, tar) => {

        // Base case: if target becomes 0, it means we have found a subset that sums up to the target
        if (tar == 0) {
            res = true;  // Set the result to true
            return;
        }

        // Base case: if we have reached the end of the array and have not found a valid subset
        if (idx + 1 == nums.length) return;

        // Include the current element and try to find the target in the remaining elements
        helper(idx + 1, tar - nums[idx]);

        // Exclude the current element and try to find the target in the remaining elements
        helper(idx + 1, tar);
    };

    // Start the recursion with index 0 and the target value
    helper(0, target);

    // Return the result after recursion
    return res;
};

//DP approach 
var canPartition = function(nums) {
    // Calculate the total sum of all elements in the array
    let sum = nums.reduce((a, b) => a + b, 0);

    // If the total sum is odd, it's impossible to split into two equal subsets
    // because two equal subsets must have an even total sum
    if (sum % 2 !== 0) return false;

    // Set the target to half of the total sum
    let target = sum / 2;

    // Create a DP array where dp[i] means whether a subset sum of i is achievable
    // Initially, no subset sum is achievable, except dp[0] (sum of an empty subset)
    let dp = new Array(target + 1).fill(false);
    dp[0] = true;  // There's always a subset with sum 0 (the empty subset)

    // Iterate through each number in the input array
    for (let num of nums) {
        // Iterate from target down to num to avoid overwriting values in dp
        // that we still need to check for later iterations
        for (let i = target; i >= num; i--) {
            // If a subset sum of (i - num) is achievable, then a subset sum of i
            // is achievable by including the current number `num`
            dp[i] = dp[i] || dp[i - num];
        }
    }

    // The final answer is whether a subset with the sum equal to target exists
    return dp[target];
};

