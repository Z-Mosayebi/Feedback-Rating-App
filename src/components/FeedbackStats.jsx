import PropTypes from "prop-types";

function FeedbackStats({ feedback }) {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
