# Power Sum

## Problem Description

You are given a **peculiar array**. This array can contain integers and/or other peculiar arrays. Your task is to find the sum of its elements, but there is a special rule for nested arrays: If an array is an element in another array, you need to compute its **equivalent value** before summing.

The **equivalent value** of a nested array is the sum of its elements raised to the power of the level of nesting. For example:

- A direct integer is counted as its face value.
- An array that is nested inside another array has its sum raised to the power equal to how far it is nested.

### Examples

## Input:
```
[1,2,[7,[3,4],2]]
```

## Output:
```
 1 + 2 +( 7+(3+4)^3+2)^2
```
