# 01 Knapsack Problem

The objective of this problem is to maximize the total value of items placed in a backpack, subject to a weight limit. Each item has a specific weight and value, and the goal is to select a combination of items such that the total weight does not exceed the given weight limit while maximizing the total value.

## Problem Statement

Given a set of `N` items, each with a specified weight and value, and a weight limit `W` for the backpack, find the most valuable combination of items such that the total weight does not exceed `W`.

### Input:
- `N` (integer): The number of items.
- `W` (integer): The maximum weight capacity of the backpack.
- `values[]` (array): An array of size `N` where each element represents the value of an item.
- `weight[]` (array): An array of size `N` where each element represents the weight of an item.

### Output:
- The maximum value that can be achieved without exceeding the weight limit `W`.

### Constraints:
- `1 <= N <= 100`
- `1 <= W <= 1000`
- `1 <= values[i], weight[i] <= 1000`

### Example:

#### Input:
```plaintext
N = 3
W = 8
values[] = [2, 3, 9]
weight[] = [8, 2, 5]
```


#### Output:
```plaintext
12
```