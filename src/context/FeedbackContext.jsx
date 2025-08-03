import { createContext, useState , useEffect} from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [IsLoading, setIsLoading] = useState(true)

  const [feedback, setFeedback] = useState([]);

  const [feedbackEdit, setFeedbackEdit] = useState ({
    item:{},
    edit: false,
  })

 useEffect(()=>{
  FetchFeedback() 
 },[])

const API_URL = import.meta.env.VITE_API_URL;

// FetchFeedback 
const FetchFeedback = async()=>{
 const response = await fetch (`${API_URL}?_sort=id&_order=desc`)
 const data = await response.json()

 console.log("Fetching from:", `${API_URL}?_sort=id&_order=desc`)


 setFeedback(data)
 setIsLoading(false)
}

  //Add Feedback
  const addFeedback = async (newFeedback) => {
   const response = await fetch(API_URL,{
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
       await fetch(`${API_URL}/${id}`, {method:'DELETE'})

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
//Update feedback
 const updateFeedback =async (id, upItem) => {
  const response = await fetch (`${API_URL}/${id}`,{
    method:'PUT',
    headers:{
      'Content-Type':'application/json',
    },
    body: JSON.stringify(upItem)
  })

  const data = await response.json()

  setFeedback(
    feedback.map((item)=> (item.id === id? {...item, ...data} : item))
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
