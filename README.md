# ⭐ Feedback Rating App (React + Vite + Express + MongoDB)

A full-stack feedback app for collecting and managing user reviews with ratings. The frontend is built with **React + Vite**, while the backend API is built using **Express** and **MongoDB Atlas**.

---




## 🔁 Repositories

- 🔹 **Frontend (this repo)**  
  [https://github.com/Z-Mosayebi/Feedback-Rating-App](https://github.com/Z-Mosayebi/Feedback-Rating-App)

- 🔹 **Backend API (Express + MongoDB)**  
  [https://github.com/Z-Mosayebi/Feedback-Rating-API-](https://github.com/Z-Mosayebi/Feedback-Rating-API-)

---

## 📸 Screenshots

![App Preview](./src/components/assets/screenshots.JPG)

---

## ✨ Features

- ✅ Add, update, and delete feedback
- ✅ Real-time UI updates without reload
- ✅ Average rating display
- ✅ Toast notifications
- ✅ React Router navigation
- ✅ MongoDB Atlas integration (persistent storage)
- ✅ Secure backend with Express + Mongoose
- ✅ Clean and reusable React components
- ✅ Global state management using Context API
- ✅ Environment variable configuration for deployment security

---

## 🧱 Tech Stack

| Tech               | Purpose                                   |
| ------------------ | ----------------------------------------- |
| **React**          | Frontend UI library                       |
| **Vite**           | Development/build tool                    |
| **React Router**   | Navigation and routing                    |
| **Context API**    | Global state management                   |
| **Express.js**     | REST API backend                          |
| **MongoDB Atlas**  | Cloud NoSQL database                      |
| **Mongoose**       | ODM for MongoDB                           |
| **React Toastify** | User notifications                        |
| **Vercel**         | Frontend deployment                       |
| **Render**         | Backend API hosting                       |
| **GitHub**         | Source control and collaboration          |

---

## 📁 Project Structure

```
📦 feedback-rating-app/
├── src/               # Frontend source
│   ├── components/
│   ├── context/
│   ├── App.jsx
│   └── main.jsx
├── .env               # Vite env file (see below)
├── vite.config.js
├── package.json
```

**🔧 Backend lives in a separate repo:**  
[Z-Mosayebi/Feedback-Rating-API-](https://github.com/Z-Mosayebi/Feedback-Rating-API-)

---

## ⚙️ Local Development Setup (Frontend Only)

### 1. Clone the repo

```bash
git clone https://github.com/Z-Mosayebi/Feedback-Rating-App.git
cd Feedback-Rating-App
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env` file

In the root folder, add a file called `.env` with the following line:

```env
VITE_API_URL=https://feedback-rating-api.onrender.com/api/feedback
```

> ℹ️ You can replace the URL with your local backend (`http://localhost:5000`) for development.

### 4. Start the frontend

```bash
npm run dev
```

> Opens the app at `http://localhost:5173`

---

## ⚙️ Backend Setup (Express + MongoDB)

The backend is hosted in a separate repository:  
👉 [Feedback-Rating-API-](https://github.com/Z-Mosayebi/Feedback-Rating-API-)

### Local Development

1. Clone the backend repo:

```bash
git clone https://github.com/Z-Mosayebi/Feedback-Rating-API-.git
cd Feedback-Rating-API-
```

2. Install dependencies:

```bash
npm install
```

3. Create `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your-mongodb-uri
```

⚠️ Replace `your-mongodb-uri` with your actual connection string from MongoDB Atlas.

4. Start the server:

```bash
npm run server
```

Backend will run at `http://localhost:5000`

### Deployment (Render)

- Create a **new Web Service** on [Render](https://render.com)
- Connect your GitHub backend repo
- Add the following environment variables:
  - `PORT=5000`
  - `MONGO_URI=your-mongodb-uri`
- Set `Build Command` to: `npm install`
- Set `Start Command` to: `node server.js`

Backend will be deployed with a public API URL like:  
`https://feedback-rating-api.onrender.com/api/feedback`

Use this URL in the frontend `.env` as `VITE_API_URL`.

---

## 🚀 Deployment Overview

| Service     | Purpose           | Status     |
|------------|-------------------|------------|
| **Vercel** | Frontend (React)  | ✅ Live     |
| **Render** | Backend API       | ✅ Live     |
| **MongoDB**| Cloud Database    | ✅ Secured |

All production environment variables are stored securely via:
- 🔐 Vercel Project Settings → Environment Variables
- 🔐 Render Dashboard → Environment Variables

---

## 📘 What I Learned

- React fundamentals (components, props, state)
- Managing side effects with `useEffect`
- CRUD operations with REST APIs
- Connecting React to MongoDB via Express
- State management using Context API
- Building full-stack apps with secure `.env` handling
- Deploying frontend (Vercel) and backend (Render)
- Version control and collaboration with Git & GitHub

---

## 📎 License

This project is for educational and portfolio use. Feel free to explore, fork, or suggest improvements.

---