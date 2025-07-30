import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes , NavLink} from "react-router-dom";
import Card from "./components/shared/Card";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
//import { useEffect } from "react";
import feedbackData from "./data/feedbackData";
import FeedbackForm from "./components/FeedbackForm";
import AboutIconLink from "./components/AboutIconLink";
import AboutPage from "./pages/AboutPage";
import POST from "./components/Post.jsx";

function App() {
  //const [feedbacks, setFeedbacks] = useState([]);
  const [feedback, setFeedback] = useState(feedbackData);

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    //console.log(newFeedback)
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
    //console.log('App', id)
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList
                  feedback={feedback}
                  handelDelete={deleteFeedback}
                />
              </>
            }
          ></Route>
          {/*<Route path="/about">This is the about route</Route>*/}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:id/:name" element={<POST />} />
        </Routes>
        <Card>
          <NavLink to='/' activeClassName='active'>
          Home
          </NavLink>
          <NavLink to='/about' activeClassName='active'>
          About
          </NavLink>
        </Card>
        <AboutIconLink />
      </div>
    </Router>
  );
}

export default App;
