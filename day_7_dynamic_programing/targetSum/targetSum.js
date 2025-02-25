/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function(nums, target) {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    
    // If the target is not achievable, return 0
    if (totalSum < target || (totalSum + target) % 2 !== 0) {
        return 0;
    }
    
    // Calculate the sum S1
    const S1 = (totalSum + target) / 2;
    
    // DP array to store the number of ways to achieve sum S1
    const dp = new Array(S1 + 1).fill(0);
    dp[0] = 1; // There's one way to make sum 0 (choose no elements)
    
    // Update the DP array with each number in nums
    for (let num of nums) {
        for (let i = S1; i >= num; i--) {
            dp[i] += dp[i - num];
        }
    }
    
    return dp[S1];
};
