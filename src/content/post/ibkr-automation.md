---
layout: ../../layouts/post.astro
title: Automate stock trading with Python
description: This is my first project in Python.
dateFormatted: Feb 24, 2025
---

# Pug: Automate Trading with Python

<img src="/assets/images/pug.jpg" alt="mascot" width="200" />

## Introduction

Trading manually can be time-consuming and prone to human error. As a developer passionate about automation, I decided to build a tool that executes trades on the **Interactive Brokers (IBKR)** platform using **Python**. This article walks through my journey, the challenges I faced, and how I optimized my solution.

## What is Pug: IBKR Automation?

**Pug** is an automation tool designed to streamline trading on **IBKR** using **price action strategies**. It continuously monitors selected stocks, executes trades based on predefined algorithms, and sends real-time notifications via Discord.

### 🚀 **Key Features**

- **Automated Trading**: Executes trades based on price action strategies.
- **Real-time Monitoring**: Continuously tracks market conditions and stock prices.
- **Logging System**: Maintains detailed logs of trading activities.
- **Discord Integration**: Receives trading commands and sends alerts in real-time.
- **Daily Reports**: Generates automated trade reports for better analysis.
- **Guardian Monitor**: Helps prevent over-exposure and enforces risk management.
- **Reversal & Scaling Algorithms**: Implements custom strategies for trade entries and scaling positions.

## Tech Stack

- **Python** (Core Logic)
- **IBKR API** (Trading Execution)
- **Discord API** (Command & Notification System)
- **Logging Module** (For trade tracking)

## Challenges & Learnings

### 🛠 **Switching from JavaScript to Python**

Coming from a JavaScript background, Python was a new language for me. I had to refactor my code multiple times to align with **Python best practices**.

### 🔗 **API Integration Challenges**

Integrating with **IBKR API** was tedious. The official library required extensive setup, but I later discovered **ib-insync**, which simplified API interactions and saved me a lot of time.

### ⚡ **Handling Real-time Data**

Maintaining stable connections with **both IBKR and Discord APIs** was challenging. I used **asynchronous processing** (`async/await`) to handle multiple API calls efficiently without blocking the main thread.

## Architecture & System Design

Pug follows a **modular architecture** for better maintainability:

- **Main Application**: Coordinates all trading activities.
- **Connect Module**: Manages API connections.
- **Logger Module**: Handles logs.
- **Reversal Algorithm Module**: Implements price action strategies.
- **Discord Server Module**: Manages communication via Discord.

## Optimizations

- **Asynchronous API Calls**: Improved response times by making IBKR API calls non-blocking.
- **Singleton Pattern for Logging**: Ensured only one logging instance to avoid duplicated log entries.

## Future Improvements

- **UI**: A UI dashboard for easier monitoring (React or Tkinter).
- **More Trading Strategies**: Implement additional algorithms for better risk management.
- **Scalability**: Optimize system to handle higher trade volumes.

## Conclusion

Building **Pug: IBKR Automation** was a rewarding experience that helped me learn Python and solving real-world trading problems. With automation, I have improved trading efficiency, reduced human error, and streamlined execution.

**If you're interested in trading automation or IBKR API development, let's connect and discuss! 🚀**
