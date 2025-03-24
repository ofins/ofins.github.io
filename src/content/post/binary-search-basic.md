---
layout: ../../layouts/post.astro
title: Binary Search - Basics
description: A brief overview of different types of binary search methods.
dateFormatted: Mar 24, 2025
---

## Binary Search

Given a sorted array, we can find the element we want by cutting our search scope by half with each search, resulting in time complexity of O log n rather than O(n).

### FAQ

**Q1: Why left + (right - left) / 2 instead of (left + right) / 2 ?**

To avoid overflow in languages with fixed integer sizes, the formula `left + (right - left) / 2` is preferred over `(left + right) / 2`.

This formula works because:

- `(right - left)` is always within a safe range (it won’t overflow).
- Adding it to `left` ensures that you're still safely within the bounds of the number range.
- Example of `overflow`

  ```jsx
  int left = Integer.MAX_VALUE - 1;
  int right = Integer.MAX_VALUE;
  int mid = (left + right) / 2; // This may overflow

  // To avoid this, use:
  int mid = left + (right - left) / 2; // Safe and no overflow
  ```

## Types of Binary Search methods

There are several variations of conditions when it comes to binary search, depending on the type of outputs you are looking for.

### Searching for exact match

```python
while left <= right:
    mid = left + (right - left) // 2

    if nums[mid] == target:
        return mid

    elif nums[mid] > target:
        right = mid - 1
    else:
        left = mid + 1
```

- This binary search checks for an **exact match** and returns the index of `target` if found.
- **Key points**:
  - The loop condition `left <= right` is correct for searching an element in a sorted array.
  - When an element is found, we return `mid`.
  - The time complexity is **O(log n)**, which is optimal for searching in sorted arrays.

### Searching for the minimal value in rotated array

```python
while left < right:
		mid = left + (right - left) // 2

		if nums[mid] > nums[right]:
				left = mid + 1
		else:
				right = mid

return nums[left] # Finding min
return nums[left - 1] # Finding max (maxium value will always be to left of min value)
```

**Key points**:

- The code properly narrows down the search space to the **minimum element**.
- `left` will eventually point to the minimum value.

### Searching for T closest to target

```jsx
// Entries is an array of objects where timestamp property is sorted in ascending-order.

let low = 0;
let high = entries.length - 1;
let result = "";

// start binary search
while (low <= high) {
  let mid = Math.floor(low + (high - low) / 2);

  if (entries[mid][0] <= timestamp) {
    result = entries[mid][1];
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}
return result;
```

**Key points**:

- The idea is to find the **closest timestamp** that is less than or equal to the `timestamp`.
- **Updating the `result`**: When `entries[mid][0] <= timestamp`, it means the timestamp at `mid` is valid, and we update `result` to keep track of the most recent valid entry.
- **Why `low = mid + 1`**: We move to the right side (higher timestamps) to potentially find a closer timestamp.
- **When `high = mid - 1`**: We look to the left side when the `mid` value exceeds the target timestamp.
