# 🚀 JobBoard Pro | Next.js 15 & AI-Powered SaaS

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

A high-performance, commercial-grade job board featuring **AI-native workflows**, dual-role onboarding, and enterprise-grade security. Built with a focus on **Server Components**, **Type Safety**, and **Scalable Background Jobs**.

[**Explore Live Demo »**](https://your-link-here.com)

---

## 🏗️ Architecture & Technical Decisions

### ⚡ Why Next.js 15?
* **Server Components (RSC):** Drastically reduced client-side JavaScript bundles while ensuring job listings are SEO-indexed by default.
* **Partial Prerendering (PPR):** Optimized the critical path by serving static job shells instantly while streaming dynamic "Apply" buttons and user-specific data.

### 🧠 The "Logic" Flow
* **Smart Auth Pipeline:** Secured via **Auth.js** with a custom middleware layer that handles role-based redirection (Org vs. Seeker) during the onboarding lifecycle.
* **Workflow Orchestration:** Leveraged **Inngest** for stateful background tasks. Unlike traditional Cron jobs, this manages a **30-day persistent summary loop** that survives server restarts and handles automatic retries.
* **Payment Integrity:** Implemented **Stripe Webhooks** with cryptographic signature verification to ensure job listings only activate upon verified `checkout.session.completed` events.

---

## 🛡️ Security & Performance

> [!IMPORTANT]
> This project implements **Arcjet** at the application layer to mitigate SQL Injection, XSS, and sophisticated bot patterns.

* **Tiered Rate Limiting:** * **Public:** 10 req/min (Anti-scraping)
    * **Authenticated:** 100 req/min (Dashboard UX)
* **Zod Validation:** Strict runtime type-checking for every API route and form submission, ensuring database integrity at the schema level.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React 19, Next.js 15, TailwindCSS, Shadcn UI |
| **Backend** | Node.js, Prisma ORM, Inngest (Workflows) |
| **Database** | PostgreSQL (Supabase / Neon) |
| **Security** | Arcjet, Auth.js (OAuth 2.0) |
| **Payments** | Stripe API & Webhooks |

---

## 🧗 Engineering Challenges

### **The 30-Day Expiration Problem**
**Challenge:** How do you handle job expirations accurately without expensive, constant database polling?

**Solution:** I engineered a **Stateful Background Workflow** using Inngest. 
1. Upon successful Stripe payment, a workflow is triggered.
2. The workflow utilizes a **Delayed Step** (`step.sleep`), putting the process to sleep for the specific duration (30/60/90 days).
3. Once the time elapses, the workflow wakes up and executes a clean DB update. 
**Result:** 0% CPU overhead during the waiting period and 100% accuracy in job termination.

---

## 🏁 Getting Started

### Prerequisites
- Node.js 20+ 
- PostgreSQL Database

### Installation
```bash
# Clone the repository
git clone [https://github.com/yourusername/jobboard-pro.git](https://github.com/yourusername/jobboard-pro.git)

# Install dependencies
npm install

# Setup Environment Variables
cp .env.example .env

# Sync Database Schema
npx prisma db push

# Start Development Server
npm run dev
