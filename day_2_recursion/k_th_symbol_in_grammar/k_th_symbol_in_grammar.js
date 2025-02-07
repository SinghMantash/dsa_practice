var kthGrammar = function(n, k) {
    // Base case: If we are looking for the 1st row, it's simply 0.
    if(n === 1){
        return 0;
    }

    // Calculate the length of the row (2^(n-1)) since each row doubles in size.
    let len = Math.pow(2, n - 1);
    
    // Find the middle of the current row.
    let mid = len / 2;

    // If k is greater than the midpoint, this means we're in the second half of the row.
    if(k > mid){
        // If we're in the second half, we subtract mid from k to get the corresponding position
        // in the previous row, and invert the result (since 0 becomes 1 and 1 becomes 0).
        return 1 - kthGrammar(n - 1, k - mid);
    } else {
        // If k is in the first half of the row, it corresponds to the same position in the previous row.
        return kthGrammar(n - 1, k);
    }
};
