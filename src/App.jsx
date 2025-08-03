import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/shared/Card";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";

import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";

import { FeedbackProvider } from "./context/FeedbackContext.jsx";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={                 
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>

          <AboutIconLink />
          <ToastContainer position="top-right" autoClose={2000} />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
