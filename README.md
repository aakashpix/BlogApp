# 📝 Simple Blog App

A full-stack blog application where users can **sign up, log in**, view public blog posts, and **create new posts**. Built using **React**, **Supabase** (for Auth & DB), and styled using **CSS** and **Tailwind CSS**.

---

## 🔧 Tech Stack

- **Frontend**: React, React Router
- **Backend**: Supabase (Auth + Posting data)
- **Styling**: CSS + Tailwind CSS
- **Hosting**: Netlify

---

## 📦 Project Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### ✅ Prerequisites

- Node.js (v16+)
- Supabase Account
- Git

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/blog-app.git
cd blog-app


2. Install Dependencies
bash
Copy
Edit
npm install


3. Set up Supabase
Create a new project at Supabase.io

Enable email/password authentication

Create a posts table with the following schema:

Column Name	Type
id	UUID (Primary Key)
title	Text
content	Text
created_at	Timestamp
author_email	Text


4. Configure Environment Variables
Create a .env file at the root:

env
Copy
Edit
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key


5. Run the App
bash
Copy
Edit
npm run dev
Visit: http://localhost:3000




```

## 💡 Features

🔐 User Authentication (Sign Up & Login)

📰 View all blog posts (publicly accessible)

✍️ Authenticated users can create posts

🔄 Real-time updates via Supabase

✅ Input validation & error handling


## 📜 Scripts
- npm run dev
- Runs the app in development mode. 
- Visit: http://localhost:3000

- npm run build
- Builds the app for production in dist/ folder.

## ⚠️ Notes

- Only authenticated users can access the /new route.

- Supabase handles both the authentication and the database.

- If user is not logged in, they will be redirected to login before creating a post.


## 🌐 Deployment

Netlify: https://netlify.com