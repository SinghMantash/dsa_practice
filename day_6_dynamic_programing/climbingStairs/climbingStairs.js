/**
 * Function to calculate the number of distinct ways to climb to the top of a staircase
 * where you can either take 1 step or 2 steps at a time, using dynamic programming.
 * 
 * @param {number} n - The total number of steps to the top of the staircase.
 * @returns {number} - The number of distinct ways to reach the top.
 */
function climbStairs(n) {
    // Base cases
    if (n === 1) {
        return 1; // Only 1 way to reach the top when there's 1 step.
    }

    // Initialize a dp array where dp[i] will store the number of ways to reach step i.
    let dp = new Array(n + 1);

    // There is 1 way to stay at step 0 (do nothing)
    dp[0] = 1;
    // There is 1 way to reach step 1 (take 1 step)
    dp[1] = 1;

    // Fill the dp array for steps 2 to n
    for (let i = 2; i <= n; i++) {
        // The number of ways to reach step i is the sum of the ways to reach step i-1 and i-2
        dp[i] = dp[i - 1] + dp[i - 2];
    }

    // The value at dp[n] will be the number of ways to reach the top (step n)
    return dp[n];
}

