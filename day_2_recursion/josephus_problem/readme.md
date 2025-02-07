# Josephus Problem

This repository provides a solution to the **Josephus Problem**. The problem involves a group of `n` friends sitting in a circle and eliminating every `k`-th person until only one person remains. The goal is to find out who the last person standing (the winner) is.

## Problem Description

There are `n` friends, numbered from `1` to `n`, sitting in a circle. The rules of the game are as follows:
1. Start at the 1st friend.
2. Count the next `k` friends in the clockwise direction, including the friend you started at. The counting wraps around the circle, and may count some friends more than once.
3. The last friend you count will leave the circle and lose the game.
4. If more than one friend remains, repeat from the friend immediately clockwise of the one who just lost.
5. The process continues until only one friend is left. This friend is the winner.

### Input:
- `n`: The number of friends in the circle (1 ≤ n ≤ 1000).
- `k`: The number of friends to count before eliminating one (1 ≤ k ≤ n).

### Output:
- The position of the last remaining friend in the circle, who wins the game.

### Example

**Input:**
```plaintext
n = 5
k = 2
```
 **Output**:
```plaintext
1
```