
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackStats() {
  const {feedback} = useContext (FeedbackContext)

  // Calculate average rating
  const averageRaw =
    feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length;

  // Format average for display (isNaN() applied to string)
  const average = isNaN(averageRaw)
    ? 0
    : averageRaw.toFixed(1).replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {average}</h4>
    </div>
  );
}



export default FeedbackStats;
