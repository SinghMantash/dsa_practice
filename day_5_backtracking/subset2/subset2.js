var subsetsWithDup = function(nums) {
    // Initialize an empty array 'res' to store the final subsets
    let res = [];

    // Helper function to recursively generate subsets
    const helper = (idx, subst) => {
        // Base case: If we have considered all elements of nums
        if (idx == nums.length) {
            // Push the current subset (a copy of it) into 'res'
            res.push([...subst]);
            return; // Exit the function
        }

        // Recursive step 1: Include the current number
        // Push the current number to the subset
        subst.push(nums[idx]);

        // Recur with the next index (considering the current number is included)
        helper(idx + 1, subst);

        // Backtrack: Remove the current number to explore subsets without it
        subst.pop();

        // Recursive step 2: Skip over duplicates to avoid generating duplicate subsets
        // We want to skip all consecutive duplicate numbers at the same index level
        while (idx < nums.length - 1 && nums[idx] == nums[idx + 1]) {
            idx++; // Skip over duplicate numbers
        }

        // Recur without including the current number
        helper(idx + 1, subst);
    };

    // Start the recursion with index 0 and an empty subset
    helper(0, []);

    // Return the final list of unique subsets
    return res;
};
