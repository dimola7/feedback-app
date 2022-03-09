import { createContext, useState, useEffect, ReactNode } from "react";

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
    isLoading: boolean
}

interface Type {
    id: number;
    rating: number;
    text: string;
}

const endpoint = "http://localhost:5000";

const FeedbackContext = createContext({} as Feedback);

export const FeedbackProvider = ({children}:Props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [feedback, setFeedback] = useState([{
        id: 1,
        rating: 10,
        text: "a test"
    }])

    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    // get data
    const fetchFeedback = async() => {
        const response = await fetch(`${endpoint}/feedback?_sort=id&_order=desc`);

        const data = await response.json();
        setFeedback(data)
        setIsLoading(false)
    }
    

    const addFeedback = async (newFeedback:any) => {
        const response = await fetch(`${endpoint}/feedback`, {
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(newFeedback)
        });
        const data = await response.json();

        setFeedback([data, ...feedback])
      }

    const deleteFeedback = async (id:number) => {
        if(window.confirm("Are you sure you want to delete?")) {
            await fetch(`${endpoint}/feedback/${id}`, {
                method: "DELETE"
            });

          setFeedback(feedback.filter((item) => item.id !== id))
        }
      }

    const editFeedback = (item:any) => {
        setFeedbackEdit({
            item,
            edit: true
        })
    }

    const updateFeedback = async (id:number, updatedItem:any) => {
        const response = await fetch(`${endpoint}/feedback/${id}`, {
            method: "PUT",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify(updatedItem)
        });
        const data = await response.json();
        setFeedback(feedback.map((item) => (item.id === id ? {...item, ...data} : item)))
    }

    return(
        <FeedbackContext.Provider value={{
            feedback,
            feedbackEdit,
            deleteFeedback,
            addFeedback,
            editFeedback,
            updateFeedback,
            isLoading
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext