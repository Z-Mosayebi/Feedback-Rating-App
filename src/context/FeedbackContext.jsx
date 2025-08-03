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
 const response = await fetch (`/feedback?_sort=id&_order=desc`)
 const data = await response.json()

 setFeedback(data)
 setIsLoading(false)
}

  //Add Feedback
  const addFeedback = async (newFeedback) => {
   const response = await fetch('/feedback',{
    method: 'Post',
    headers:{
      'Content-Type':'application/json'
    },
    body : JSON.stringify(newFeedback)
   })

   const data = await response.json()

    setFeedback([data, ...feedback]);
  };
 
  //Delete feedback
  const deleteFeedback = async(id) => {
    if (window.confirm("Are you sure you want to Delete?")) {
       await fetch(`/feedback/${id}`, {method:'DELETE'})

      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //Edit feedback
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
