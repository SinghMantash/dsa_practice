// Function to solve the 0/1 Knapsack problem using Dynamic Programming
function knapsack(N, W, values, weights) {
    // Create a 2D array (table) to store the maximum value at each step
    // dp[i][w] will store the maximum value that can be obtained with the first 'i' items and a knapsack capacity of 'w'
    let dp = [];
    
    // Initialize the dp array with 0's. The size of the dp array is (N+1) x (W+1)
    // We need N+1 rows (for 0 to N items) and W+1 columns (for 0 to W weight capacity)
    for (let i = 0; i <= N; i++) {
      dp[i] = [];
      for (let w = 0; w <= W; w++) {
        dp[i][w] = 0; // Start with 0 for all values
      }
    }
  
    // Now, fill up the dp table
    // We go through each item one by one (i = 1 to N) and each weight capacity (w = 1 to W)
    for (let i = 1; i <= N; i++) {
      for (let w = 1; w <= W; w++) {
        // If the weight of the current item is less than or equal to the current capacity 'w'
        if (weights[i - 1] <= w) {
          // We have two choices:
          // 1. Include the current item: dp[i-1][w - weights[i-1]] + values[i-1]
          // 2. Exclude the current item: dp[i-1][w]
          // Take the maximum of these two options
          dp[i][w] = Math.max(dp[i - 1][w], dp[i - 1][w - weights[i - 1]] + values[i - 1]);
        } else {
          // If the current item cannot fit, just take the value from the previous row (exclude the item)
          dp[i][w] = dp[i - 1][w];
        }
      }
    }
  
    // The answer is in the last cell of the dp array, which represents the maximum value for all items and capacity W
    return dp[N][W];
  }
  
  // Example usage:
  
  // N = 3 (3 items), W = 8 (backpack weight limit)
  let N = 3;
  let W = 8;
  
  // Array of values for the 3 items
  let values = [2, 3, 9];
  
  // Array of weights for the 3 items
  let weights = [8, 2, 5];
  
  // Call the knapsack function to get the maximum value that can be packed
  let result = knapsack(N, W, values, weights);
  
  // Output the result
  console.log(result);  // Output: 12
  