# Monotonic Array Problem

This repository contains a solution to the **Monotonic Array** problem in JavaScript. The goal is to determine whether a given array of integers is **monotonic**, meaning it is either **monotonically increasing** or **monotonically decreasing**.

## Problem Statement

An array is **monotonic** if it is either monotone increasing or monotone decreasing:

- **Monotone Increasing**: The array elements are in non-decreasing order (i.e., each element is greater than or equal to the previous one).
- **Monotone Decreasing**: The array elements are in non-increasing order (i.e., each element is smaller than or equal to the previous one).

Your task is to return **true** if the given integer array is monotonic, and **false** otherwise.

## Example

### Example 1:
```javascript
// Test case 1: Monotonic increasing array
console.log(isMonotonic([1, 2, 2, 3])); // Output: true
```
### Example 2:
```javascript
// Test case 2: Monotonic increasing array
console.log(isMonotonic([6, 5, 4, 4])); // Output: true
```
### Example 3:
```javascript
// Test case 3: Monotonic increasing array
console.log(isMonotonic([1, 3, 2]));    // Output: false
```
