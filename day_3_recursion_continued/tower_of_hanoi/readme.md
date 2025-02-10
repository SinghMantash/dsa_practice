# Tower of Hanoi

## Problem Description

The **Tower of Hanoi** is a famous puzzle that involves three rods and a number of disks. The goal of the puzzle is to move the entire stack of disks from the initial rod to a target rod, following these rules:

1. Only one disk can be moved at a time.
2. A disk can only be placed on top of a larger disk or on an empty rod.
3. A disk cannot be placed on top of a smaller disk.

### Task

You are given an integer `N`, which represents the number of disks. The disks are initially stacked in decreasing size on rod 1, with the smallest disk at the top and the largest at the bottom.

The goal is to print the steps required to move all the disks from **rod 1** to **rod 3**, following the rules mentioned above.

Additionally, you need to print the total number of moves required to complete the puzzle.

### Example

#### Input:

```
N=2
```

#### Output:
```
For `N = 2`, we have the following steps:

1. Move the smallest disk (disk 1) from rod 1 to rod 2.
2. Move the second disk (disk 2) from rod 1 to rod 3.
3. Move the smallest disk (disk 1) from rod 2 to rod 3.

Thus, there are a total of 3 moves required.
```
