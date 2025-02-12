var permute = function(nums) {
    // This array will store all the permutations
    let res = [];
    // 'len' stores the length of the input array 'nums'
    let len = nums.length;
    
    // Helper function is where the recursion happens
    const helper = (idx) => {
        // Base case: if idx is the last index, push the current permutation to the result
        if (idx == nums.length - 1) {
            // We create a copy of the current permutation using the spread operator
            res.push([...nums]);
            return;
        }

        // We loop through the array starting from the current index 'idx'
        for (let j = idx; j < len; j++) {
            // Swap the current element with the element at index 'j'
            [nums[idx], nums[j]] = [nums[j], nums[idx]];

            // Now that we've swapped, we call the helper function to generate permutations of the rest of the array
            helper(idx + 1);

            // After the recursive call, we need to swap back to restore the original array (backtracking)
            [nums[idx], nums[j]] = [nums[j], nums[idx]];
        }
    }
    
    // Start the recursive process from the first index (0)
    helper(0);
    
    // Return the final array of permutations
    return res;
};
