---
layout: ../../layouts/post.astro
title: "[JavaScript] Memory leaks examples"
description: Simple example of what causes memory leaks and how to resolve them.
dateFormatted: Mar 8, 2025
---

## Closure and memory retention

Closures keeps references to their lexical scope, which can prevent garbage collection (GC).

```jsx
function createCounter() {
  let count = 0;
  let hugeArray = new Array(100000).fill("data");

  return function increment() {
    count++;
    console.log(count);
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
```

hugeArray isn’t needed in `increment`, but closure will keep it in memory. Over time, this could cause memory leak.

Solution: nullify unused references.

```jsx
function createCounter() {
  let count = 0;
  let hugeArray = new Array(100000).fill("data");
  const fn = () => {
    count++;
    console.log(count);
  };
  hugeArray = null; // nullify
  return fn;
}
```

## Event listeners and memory leaks

Unremoved event listeners keeps objects alive, even if they are no longer in DOM.

```jsx
function attachListener() {
  const button = document.createElement("button");

  document.body.appendChild(button);

  button.addEventListener("click", () => {
    console.log("clicked");
  });

  document.body.removeChild(button);
}

attachListenr();
```

The button is removed, but event listener will stay in memory until page unloads.

Solution: remove event listeners explicitly.

```jsx
function attachListener() {
  const button = document.createElement("button");
  const handler = () => console.log("click");
  document.body.appendChild(button);
  button.addEventListener("click", handler);

  return () => {
    button.removeEventListener("click", handler);
    document.body.removeChild(button);
  };
}

const cleanup = attachListener();
cleanup(); // properly frees memory
```

## Circular reference and garbage collection(GC)

Even though modern JS engines can handle circular references, it can delay GC and confuse devs.
