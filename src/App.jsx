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
        <FeedbackForm/>
         <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handelDelete={deleteFeedback} />
        
       
       
       
       
      </div>
    </>
  );
}

export default App;
