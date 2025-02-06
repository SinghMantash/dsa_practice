function sortedSquarredArray(array) {
    // Create a new array with the same length as the input array, filled with zeros.
    let newArr = new Array(array.length).fill(0);
    
    // Initialize two pointers: one at the start (left) and one at the end (right) of the array.
    let rightPtr = array.length - 1;
    let leftPtr = 0;
    
    // Loop through the array starting from the last index and move towards the first.
    for (let i = array.length - 1; i >= 0; i--) {
        
        // Print current index, right pointer value, and left pointer value (for debugging purposes).
        console.log(i, array[rightPtr], array[leftPtr]);

        // Calculate the square of the element at the right pointer.
        let sqAtRightPtr = array[rightPtr] * array[rightPtr];
        
        // Calculate the square of the element at the left pointer.
        let sqAtLeftPtr = array[leftPtr] * array[leftPtr];

        // Compare the squares of the elements at the two pointers.
        if (sqAtLeftPtr >= sqAtRightPtr) {
            // If the square at the left pointer is greater than or equal to the square at the right pointer,
            // place the square at the left pointer into the new array and move the left pointer forward.
            newArr[i] = sqAtLeftPtr;
            leftPtr++;
        } else {
            // If the square at the right pointer is greater than the square at the left pointer,
            // place the square at the right pointer into the new array and move the right pointer backward.
            newArr[i] = sqAtRightPtr;
            rightPtr--;
        }
    }
    
    // Return the new array with squared elements sorted in ascending order.
    return newArr;
}
