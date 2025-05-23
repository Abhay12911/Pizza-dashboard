# 🍕 Pizza Dashboard

A modern, server-rendered dashboard application built with **Next.js**, **NextAuth.js**, and **Tailwind CSS**. It includes secure Google OAuth, protected routes, and a responsive UI to display pizza order data — designed as a submission for a frontend assignment.

---

## 👤 Author
 Abhay Mishra

---

## 🔍 Overview

This project demonstrates:
- Google OAuth authentication using NextAuth.js
- Protected dashboard pages
- Responsive UI built with Tailwind CSS
- A mock Pizza Orders table with status badges
- Deployment using Vercel

---

## 🚀 Live Demo

🔗 [Live App](https://your-vercel-url.vercel.app)  
📦 [GitHub Repository](https://github.com/yourusername/pizza-dashboard)

---

## 🔧 Tech Stack

- **Framework**: Next.js (App Router)
- **Auth**: NextAuth.js (Google OAuth)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

---

## 🔐 Authentication Features

- Google OAuth sign-in/sign-up
- Protected routes (Dashboard & Orders)
- Authenticated user greeting (`Hello, [User Name]`)
- Logout functionality
- Redirect unauthenticated users to login

---

## 📄 Pages

### ✅ `Hello User` Page
- Shows: `Hello, [User’s Google Name]!`
- Redirects to this page post-login

### 🍕 `Pizza Orders` Page
- Mock data table of pizza orders
- Columns: Order ID, Customer Name, Pizza Type, Quantity, Order Date, Status
- Statuses with visual badges (e.g., Pending, Delivered, etc.)
- Responsive layout, clear navigation

---

## 📁 Project Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/pizza-dashboard.git
cd pizza-dashboard
