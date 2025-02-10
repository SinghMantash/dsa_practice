function toh(N, fromm, to, aux) {
    // Initialize the move counter
    let moves = 0;
    
    // Helper function that performs the recursive solution
    const helper = (N, fromm, to, aux) => {
        // Base case: When there is only one disk, move it directly from 'fromm' to 'to'
        if (N == 1) {
            moves++;  // Increment the move counter
            console.log("move disk " + N + " from rod " + fromm + " to rod " + to);  // Print the move
            return;
        }
        
        // Step 1: Move N-1 disks from 'fromm' to 'aux' (using 'to' as the auxiliary rod)
        helper(N - 1, fromm, aux, to);
        
        // Step 2: Move the Nth disk from 'fromm' to 'to' (print the move)
        moves++;  // Increment the move counter
        console.log("move disk " + N + " from rod " + fromm + " to rod " + to);  // Print the move
        
        // Step 3: Move N-1 disks from 'aux' to 'to' (using 'fromm' as the auxiliary rod)
        helper(N - 1, aux, to, fromm);
    };
    
    // Start the recursion by calling the helper function
    helper(N, fromm, to, aux);
    
    // Return the total number of moves
    return moves;
}
