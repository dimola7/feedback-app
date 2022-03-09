import { createContext, useState, ReactNode } from "react";
import {v4 as uuidv4} from 'uuid';

interface Props {
    children: ReactNode;
}

interface Feedback {
    feedback: Array<Type>;
    deleteFeedback: (id:number) => void;
    addFeedback: (newFeedback:any) => void;
    editFeedback: (item:any) => void;
    feedbackEdit: any;
    updateFeedback: (id:number, updatedItem:any) => void;
}

interface Type {
    id: number;
    rating: number;
    text: string;
}

const FeedbackContext = createContext({} as Feedback);

export const FeedbackProvider = ({children}:Props) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "first from context",
            rating: 10
        },
        {
            id: 2,
            text: "second from context",
            rating: 5
        },
        {
            id: 3,
            text: "third from context",
            rating: 6
        }
    ])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    const addFeedback = (newFeedback:any) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback])
      }

    const deleteFeedback = (id:number) => {
        if(window.confirm("Are you sure you want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    const editFeedback = (item:any) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = (id:number, updatedItem:any) => {
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...updatedItem} : item)))
    }

    return(
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext