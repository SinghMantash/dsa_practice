# Palindromic Substrings

## Problem Statement
Given a string `s`, return the number of **palindromic substrings** in it.

A string is a **palindrome** when it reads the same backward as forward.

A **substring** is a contiguous sequence of characters within the string.

## Examples

### Example 1
- **Input:** `s = "pqrp"`
- **Output:** `4`
- **Explanation:** Four palindromic substrings: `"p"`, `"q"`, `"r"`, and `"p"`.

### Example 2
- **Input:** `s = "abba"`
- **Output:** `6`
- **Explanation:** Palindromic substrings are `"a"`, `"b"`, `"b"`, `"a"`, `"bb"`, and `"abba"`.

### Example 3
- **Input:** `s = "abc"`
- **Output:** `3`
- **Explanation:** Each character itself is a palindrome: `"a"`, `"b"`, and `"c"`.

## Solution Approach: Expand Around Center
1. For every possible center of a palindrome (single character or between two characters), expand outward while checking for palindromes.
2. Increment a counter for each valid palindrome.


## Edge Cases to Consider
- Empty string → Return `0`
- Single character → Return `1`
- All characters are the same → Return `n * (n + 1) / 2`

