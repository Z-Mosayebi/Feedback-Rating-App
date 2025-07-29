
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
//import { useEffect } from "react";
import feedbackData from "./data/feedbackData";
import FeedbackForm from "./components/FeedbackForm";

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
    <>
      <Header />
      <div className="container">
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handelDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
