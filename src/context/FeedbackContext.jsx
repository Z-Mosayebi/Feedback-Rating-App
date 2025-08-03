import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';


const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    FetchFeedback();
  }, []);

  // FetchFeedback
  const FetchFeedback = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error("faild to fetch data");
      }
      const data = await response.json();

      setFeedback(data);
    } catch (error) {
      console.log("Error fetching data:", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  //Add Feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch(API_URL, {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    setFeedback([data, ...feedback]);

    toast.success("Feedback added!");

  };

  //Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });

      setFeedback(feedback.filter((item) => item._id !== id));
    }
    toast.success("Feedback deleted!");

  };

  //Edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  //Update feedback
  const updateFeedback = async (id, upItem) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(upItem),
    });

    const data = await response.json();

    setFeedback((prev) =>
      prev.map((item) => (item._id === data._id ? { ...item, ...data } : item))
    );

      toast.success("Feedback updated successfully!");
      
    // Clear the edit state so form resets
    setFeedbackEdit({ item: {}, edit: false });

  

  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        isLoading,
        setIsLoading,
        feedbackEdit, //It is a actual pice of  Steate that whols the item and the boolean
        deleteFeedback,
        addFeedback,
        editFeedback, //thi is a function that run when click on them
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
