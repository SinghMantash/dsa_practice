var findTheWinner = function(n, k) {
    // Create an array `arr` that will store the friends numbered from 1 to n
    let arr = [];
    for (let i = 1; i <= n; i++) {
        arr.push(i); // Add friends 1 through n to the array
    }

    // Define a helper function that performs the elimination recursively
    var helper = function(arr, startIdx) {
        // Base case: If there's only one friend left, return that friend (winner)
        if (arr.length === 1) {
            return arr[0];
        } else {
            // Find the index of the friend to remove
            // The formula `(startIdx + k - 1) % arr.length` ensures that we wrap around the circle
            let idxToRemove = (startIdx + k - 1) % arr.length;

            // Remove the friend at the calculated index
            arr.splice(idxToRemove, 1);

            // Call the helper function recursively, starting from the friend immediately clockwise of the eliminated one
            // `idxToRemove` is passed as the new starting index for the next round
            return helper(arr, idxToRemove);
        }
    }

    // Start the recursion from index 0 (starting with the first friend in the circle)
    return helper(arr, 0);
};
