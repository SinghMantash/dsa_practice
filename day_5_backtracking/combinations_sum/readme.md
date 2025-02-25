# Combination Sum 1

## Problem Statement

Given an array of distinct integers `candidates` and a target integer `target`, return a list of all unique combinations of candidates where the chosen numbers sum to `target`. 

### Notes:
- You may return the combinations in any order.
- The same number may be chosen from `candidates` an unlimited number of times.
- Each combination should be unique, meaning that the frequency of at least one number must be different.
- All integers in the `candidates` array are non-negative.

## Example

### Example 1:
**Input:**

```javascript
candidates = [2, 3, 8, 9]
target = 9
```

**Output**
```javascript
combinations_sum[
  [2, 2, 2, 3],
  [3, 3, 3],
  [9]
]

Explanation:

[2, 2, 2, 3] adds up to 9.
[3, 3, 3] adds up to 9.
[9] adds up to 9.
These are the only combinations that sum to 9.
```