---
layout: ../../layouts/post.astro
title: Crypto Swap Automation - Fullstack Roadmap
description: This is my roadmap to creating a fullstack application for my Crypto Swap Automation app.
dateFormatted: Mar 3, 2025
---

<img src="/assets/images/posts/robot-banner.jpg" />

# Roadmap

## Brief

A while back, I built a Crypto Swap Automation application to help me monitor and execute trades on crypto tokens. While this is great, I thought it would be even better to make it come "alive" with an aesthetic user interface that could potentially be used by other people.

In the frontend, I'm going with **Next.js** and integrating **refine** framework to accelerate my development process (also because it's a great framework for CRM system).

Since I am going to be the only person working on this, I will be leveraging **Supabase** as `backend-as-a-service`, with the possibility of migrating it to **AWS** serverless later for better scalability. For ops, I will be deploying it on AWS (making great use of my free-tier).

I'm estimating this take around 300 hours (~37 workdays) give or take.

## Phase 1: Setup and Foundation

### 1. Project Setup (1-1.5 weeks)

- **Next.js & Refine Framework**
  - Initialize project with Next.js
  - Integrate Refine framework for rapid development
- **Code Quality Tools**
  - Configure ESLint for code consistency
  - Implement TypeScript for type safety

### 2. Supabase Setup

- **Supabase Client Configuration**
  - Set up authentication
  - Configure database client
  - Initialize API endpoints
- **Postgres Schema Design**
  - `users`: User profiles and authentication
  - `wallets`: Wallet addresses and metadata
  - `watchlists`: Price tracking configurations

### 3. Authentication Setup

- **Supabase Authentication**
  - Email-based login/signup
  - OAuth integration (Google, GitHub, etc.)
- **Wallet Integration**
  - "Connect Wallet" button
  - Web3.js/Ethers.js implementation

### 4. AWS & Docker Setup

- **Containerization**
  - Dockerize Next.js application
- **Deployment Infrastructure**
  - Configure AWS ECS/EC2
  - Setup CI/CD pipeline

---

## Phase 2: Core UI Development (2.5-3 weeks)

### 1. Watcher Feature

- **List View**
  - Fetch ticker data from CoinGecko API
  - Display real-time cryptocurrency prices
- **Details View**
  - Show ticker details
  - Watch price list (price, expiration, creation date)
- **CRUD Operations**
  - Create, Read, Update, Delete watchlist items

### 2. Wallet Page

- **Wallet List**
  - Display wallet details:
    - Address
    - Nickname
    - Tokens
    - Balance
    - Exposure
    - 7-day gains/losses
- **Wallet Details**
  - Basic wallet information
  - List of automated tokens
  - Ant Design charting integration

### 3. Settings

- **User Management**
  - Password change functionality via Supabase Auth

### 4. Menus & Navigation

- **Interface Components**
  - Sidebar and topbar navigation
  - Links to: Watcher, Accounts, Settings
  - "Connect Wallet" button
- **UI Optimization**
  - Responsive mobile/desktop design
  - Error handling and loading states
  - Code-splitting and lazy loading

---

## Phase 3: Data Integration and Testing (1.5-2 weeks)

### 1. Supabase API Integration

- **Real-time Data**
  - Connect Supabase with crypto data feeds
  - Implement real-time updates

### 2. Testing

- **Unit Tests**
  - Test core components and utilities
  - Validate API integrations

---

## Phase 4: Deployment and Final Touchup (1 week)

### 1. Deployment

- **AWS Deployment**
  - Deploy Docker containers to ECS/EC2
  - Configure scaling and monitoring

### 2. Final Validation

- **End-to-End Testing**
  - Verify complete user flows
  - Test authentication and data consistency

---

_Updated: March 02, 2025_
