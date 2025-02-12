var permuteUnique = function(nums) {
    // This array will store all the unique permutations
    var res = [];
    
    // Helper function to generate permutations using backtracking
    const helper = (idx) => {
        // A hash set to track numbers that have already been used at this index
        var hash = {};
        
        // Base case: If we have reached the last index of the array, we have formed a complete permutation
        if (idx === nums.length - 1) {
            // Add a copy of the current permutation to the result array
            res.push([...nums]);
            return;
        }
        
        // Loop through the array starting from the current index (idx)
        for (let j = idx; j < nums.length; j++) {
            // Check if the current number has already been used in this iteration (to avoid duplicates)
            if (!hash[nums[j]]) {
                // Mark the current number as used by adding it to the hash
                hash[nums[j]] = 1;
                
                // Swap the current element with the element at the current index (idx)
                [nums[idx], nums[j]] = [nums[j], nums[idx]];
                
                // Recursively call the helper function to generate permutations of the remaining elements
                helper(idx + 1);
                
                // Backtrack: Swap the elements back to restore the original array (undo the change)
                [nums[idx], nums[j]] = [nums[j], nums[idx]];
            }
        }
    };
    
    // Start the process by calling the helper function from index 0
    helper(0);
    
    // Return the result array containing all unique permutations
    return res;
};
