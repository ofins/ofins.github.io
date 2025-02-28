---
layout: ../../layouts/post.astro
title: Image Shift - Overcoming image shifting on hover!
description: This is a common phenomenon when dealing with frontend work.
dateFormatted: Dec 31, 2024
---

## The Problem: Shifting Text and Images on Hover

Have you ever noticed that when you hover over certain elements on a webpage, the text or images suddenly shift? This happens because the browser repaints the element in response to the hover state, causing an unexpected visual jump.

## The Fix: Use `will-change`

To prevent this, you can use the CSS property `will-change: transform;`. This tells the browser in advance that the element will undergo a transformation, allowing it to optimize rendering and avoid unnecessary repaints.

### Example:

```css
.element {
  will-change: transform;
}
```

By adding this to your CSS, you’re giving the browser a heads-up so it can handle the hover effect smoothly without causing unwanted layout shifts.

## When to Use `will-change`

While `will-change` is powerful, it should be used sparingly. Overusing it can lead to excessive memory usage and performance issues. It’s best applied only to elements where you’re experiencing visual shifts or animations that feel laggy.

## Final Thoughts

Fixing hover-induced shifts is a small but important detail that enhances the user experience. By leveraging `will-change`, you can create smoother, more polished interactions that leave a better impression—whether on your users or potential employers checking out your work.
