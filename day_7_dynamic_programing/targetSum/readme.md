# Target Sum Problem

## Problem Description

You are given an integer array `nums` and an integer `target`. Your task is to build an expression using the integers in the array `nums` by adding one of the symbols `'+'` or `'-'` before each integer in `nums` and then concatenating the results.

The goal is to return the number of different expressions that you can build, which evaluate to the given target.

For example, if `nums = [2, 1]`, you can add a `'+'` before 2 and a `'-'` before 1 and concatenate them to build the expression "+2-1".

### Example

**Input:**
```
nums = [1, 1, 1, 1]
target = 2
```

**Output:**
```
4
```

**Explanation:**

 There are 4 ways to assign symbols to make the sum of nums equal to the target 2.
```
-1 + 1 + 1 + 1 = 2
+1 - 1 + 1 + 1 = 2
+1 + 1 - 1 + 1 = 2
+1 + 1 + 1 - 1 = 2
```