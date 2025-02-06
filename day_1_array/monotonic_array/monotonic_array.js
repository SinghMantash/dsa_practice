const isMonotonic = function(array) {
    // Handle empty array or array with a single element (always monotonic)
    if (array.length === 0) {
        return true;
    }
    
    // Variables to store the first and last elements of the array
    let first = array[0];
    let last = array[array.length - 1];
    
    // Case 1: If the array starts with a larger element than it ends, it's decreasing
    if (first > last) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] < array[i + 1]) return false; // If we find an increase, return false
        }
    }
    
    // Case 2: If the array starts and ends with the same element, it should be constant
    else if (first === last) {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] !== array[i + 1]) return false; // If we find a difference, return false
        }
    } 
    // Case 3: If the array starts with a smaller element than it ends, it's increasing
    else {
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) return false; // If we find a decrease, return false
        }
    }
    
    // If no violations were found, the array is monotonic
    return true;
}