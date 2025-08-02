import { v4 as uuidv4 } from "uuid";
import { createContext, useState , useEffect} from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [setLoading, setIsLoading] = useState(true)

  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState ({
    item:{},
    edit: false,
  })

 useEffect(()=>{
  FetchFeedback()
 },[])

// FetchFeedback 
const FetchFeedback = async()=>{
 const response = await fetch (`http://localhost:5000/feedback?_sort=id&_order=desc`)

 const data = await response.json()

 setFeedback(data)
 setIsLoading(false)
}

  //Add Feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to Delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (item) =>{
    setFeedbackEdit({
      item,
      edit:true
    })
  }

 const updateFeedback = (id, upItem) => {
  setFeedback(
    feedback.map((item)=> (item.id === id? {...item, ...upItem} : item))
  )
 }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback, //thi is a function that run when click on them 
        feedbackEdit , //It is a actual pice of  Steate that whols the item and the boolean 
        updateFeedback,
        setIsLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
