# 🛒 Amazon-like E-commerce App (MERN Stack)

A full-featured, responsive e-commerce web application built using the MERN stack. It includes user registration/login, product browsing from Fakestore API, cart management, address entry, and secure Stripe payment integration.

---

## 🌐 Live Demo

- **Frontend (Vercel)**: [https://your-frontend-url.vercel.app](https://frontend-amazon-gv27wwtbd-narendras-projects-b37f6e3c.vercel.app/)
- **Backend (Render)**: [https://your-backend-url.onrender.com](https://amazon-backend-6d8j.onrender.com)


---

## 🧰 Tech Stack

### 🔹 Frontend
- React (Vite)
- React Router
- Context API (for search and cart state)
- Stripe.js for payment
- Plain CSS (fully responsive)

### 🔹 Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Stripe (Payment Gateway)

---

## 📦 Features

- 🔐 User Registration and Login
- 🛍️ Product Listing via Fakestore API
- 🔎 Product Search by Title
- 🛒 Add to Cart with Live Item Count
- 💳 Stripe Payment Gateway Integration
- 🏠 Address Input at Checkout
- 📱 Mobile-first, Fully Responsive Layout

---

## 📂 Project Structure
project-root/
├── frontend/ # Vite + React frontend
│ ├── public/
│ ├── src/
│ ├── .env.example
│ └── ...
├── backend/ # Express backend
│ ├── routes/
│ ├── .env.example
│ └── server.js
└── README.md

## ⚙️ Getting Started Locally

### 🔧 
    Backend Setup

1. Navigate to `/backend` folder
2. Install dependencies:
   ```bash
   npm install

.env.example
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key

💻 
   Frontend Setup
   1. Navigate to `/frontend` folder
   2. Install dependencies:
   3. npm install

.env.example

VITE_API_BASE_URL=http://localhost:5000
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

npm run dev


   
