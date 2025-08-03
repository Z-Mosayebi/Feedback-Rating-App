# ⭐ Feedback Rating App

A simple yet complete React app for collecting and managing user feedback with ratings. Built using **React + Vite**, this project demonstrates component-driven development, local API simulation, and full CRUD functionality using **JSON Server**.

---

## 📸 Screenshots

![App Preview](./src/components/assets/screenshots.JPG)

---

##  Features

- ✅ Add, update, and delete feedback
- ✅ Display average rating in real time
- ✅ Client-side routing with React Router
- ✅ Controlled forms with live validation
- ✅ Global state using React Context API
- ✅ Clean folder structure and reusable components
- ✅ JSON Server as a mock REST API
- ✅ Development proxy configuration
- ✅ Simultaneous frontend/backend startup using `concurrently`
- ✅ Flexible configuration using `.env` files

---

## 🧱 Tech Stack

| Tech               | Purpose                                  |
|--------------------|-------------------------------------------|
| **React**          | UI library for building components        |
| **Vite**           | Fast development server and bundler      |
| **React Router**   | Routing and page navigation               |
| **Context API**    | Manage global feedback state              |
| **JSON Server**    | Simulate backend API (REST)              |
| **Concurrently**   | Run frontend and backend with one command|
| **VS Code**        | Code editor                              |
| **Git + GitHub**   | Version control and source hosting        |
| **JavaScript (ES6+)** | Modern language features               |

---

## 📁 Folder Structure

```
src/
├── components/       # Reusable UI components
│   ├── FeedbackForm.jsx
│   ├── FeedbackList.jsx
│   ├── FeedbackItem.jsx
│   ├── FeedbackStats.jsx
│   ├── RatingSelect.jsx
│   └── Header.jsx
│
├── context/          # Global state using Context API
│   └── FeedbackContext.jsx
│
├── data/             # Optional sample data or JSON DB
│   └── db.json
│
├── pages/            # For page structure
│
├── App.jsx           # Root App component
└── main.jsx          # React DOM entry point
```

---

## ⚙️ Setup Instructions

### 1. Clone and install dependencies

```bash
git clone https://github.com/Z-Mosayebi/Feedback-Rating-App
cd feedback-rating-app
npm install
```

### 2. Run the Project

This project uses [`concurrently`](https://www.npmjs.com/package/concurrently) to run the React app and JSON Server at the same time with a single command:

 You can either use a local JSON Server OR connect to a live backend (like Render).

#### ▶️ Option A: Local development (with local db.json)

```bash
npm start
```

This runs both:

- Vite frontend on `localhost:3000`
- JSON Server backend on `localhost:5000`

#### ▶️ Option B: Connect to live backend (Render)
1. Create a file called `.env.local` in the project root:

```env
VITE_API_URL=https://your-render-backend.onrender.com/feedback
```

2. Then run:
```bash
npm run dev
```


###  Scripts (package.json)

```json
"scripts": {
  "start": "concurrently \"npm run start:dev\" \"npm run start:client\"",
  "start:dev": "npx json-server --watch db.json --port 5000",
  "start:client": "vite"
}
```



##  What I Learned

- React fundamentals: components, props, state
- State sharing through Context API
- Handling side effects with `useEffect`
- CRUD operations with a fake backend
- Managing form inputs and validations
- Modular component design
- Running multiple services in development using `concurrently`
- Writing meaningful commits with Git

---

## 📎 License

This project is for educational purposes and personal portfolio use.

---
