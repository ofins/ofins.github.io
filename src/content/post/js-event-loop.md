---
layout: ../../layouts/post.astro
title: "[JavaScript] Tricky event loop scenarios"
description: A short summary on some interesting event loop phenomenon in JS.
dateFormatted: Mar 7, 2025
---

## Microtasks vs Macrotasks

Even loop prioritizes microtasks over macrotasks.

**Microtasks**

- Promises

**Macrotasks**

- setTimeout
- setInterval
- requestAnimationFrame
- I/O Operations (file system, network requests)

```jsx
console.log("start");

setTimeout(() => console.log("timeout"), 0);

Promise.resolve().then(() => console.log("promise"));

console.log("end");

// Outputs
// start
// end
// promise
// timeout
```

## Event loop blocking with heavy computation

Sychronous, CPU-intensive code blocks will block event loop, delaying async tasks.

```jsx
console.log("start");

setTimeout(() => console.log("timeout"), 0);

let start = Date.now();
while (Date.now() - start < 2000) {} // blocks for 2 sec

console.log("end");

// Output
// start
// end (2 secs later)
// timeout
```

## Nested async execution

Nested setTimeout or recursive promise can be tricky.

```jsx
setTimeout(() => {
  console.log("outer timeout");
  Promise.resolve().then(() => console.log("inner promise"));
  setTimeout(() => console.log("inner timeout"), 0);
}, 0);

console.log("start");

// Outputs
// start
// outer timeout
// inner promise
// inner timeout
```
