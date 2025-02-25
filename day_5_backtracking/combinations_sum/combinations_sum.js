var combinationSum = function(candidates, target) {
    // Create an array 'res' to store all the valid combinations
    let res = []
    
    // Define a helper function to handle the recursion
    const helper = (index, curr, currSum) => {
        // If the current sum exceeds the target, stop the function (pruning)
        if (currSum > target) {
            return 
        }
        
        // If the current sum is exactly equal to the target, we found a valid combination
        if (currSum === target) {
            // Push a copy of the current combination into the result array
            res.push([...curr])
            return
        }
        
        // Loop through the remaining candidates, starting from the current index
        // This ensures that we can reuse numbers multiple times
        for (let i = index; i < candidates.length; i++) {
            // Add the current candidate to the combination
            curr.push(candidates[i])
            
            // Call the helper function again, but this time the index 'i' stays the same
            // This allows us to reuse the same candidate multiple times
            helper(i, curr, currSum + candidates[i])
            
            // Backtrack: remove the last candidate added to try a different combination
            curr.pop()
        }
    }
    
    // Start the recursion by calling the helper function with index 0, an empty combination, and a sum of 0
    helper(0, [], 0)
    
    // Return the result array, which contains all valid combinations
    return res 
};
