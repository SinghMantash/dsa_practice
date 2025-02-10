function powerSum(array, power = 1) {
    // Initialize sum to accumulate the sum of elements
    let sum = 0;
    
    // Iterate through each item in the array
    array.forEach(item => {
        // Check if the current item is a nested array
        if (Array.isArray(item)) {
            // If it's a nested array, recursively calculate its power sum
            sum += powerSum(item, power + 1);
        } else {
            // If it's a number, add it directly to the sum
            sum += item;
        }
    });
    
    // Return the sum raised to the given power
    return Math.pow(sum, power);
}
