# k-th Symbol in Grammar

This repository contains a solution to the "k-th Symbol in Grammar" problem. The goal is to generate a sequence of rows following a specific rule and find the `k`-th symbol in the `n`-th row.

## Problem Description

We are given two integers `n` and `k`. The task is to return the `k`-th (1-indexed) symbol in the `n`-th row of a sequence table.

The sequence table is built as follows:
1. The 1st row is `0`.
2. For each subsequent row, every occurrence of `0` is replaced with `01`, and every occurrence of `1` is replaced with `10`.

For example:
- Row 1: `0`
- Row 2: `01`
- Row 3: `0110`
- Row 4: `01101001`
- Row 5: `0110100110010110`

### Input

- Two integers `n` (the row number) and `k` (the position of the symbol in that row) where:
  - `1 ≤ n ≤ 30`
  - `1 ≤ k ≤ 2^(n-1)`

### Output

- A single integer, either `0` or `1`, which is the `k`-th symbol in the `n`-th row.

### Example

#### Input:
```plaintext
n = 3
k = 2
```

#### Output:
```plaintext
1
```