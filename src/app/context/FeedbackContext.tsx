import { createContext, useState, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface Feedback {
    feedback: any
}

const FeedbackContext = createContext({} as Feedback);

export const FeedbackProvider = ({children}:Props) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1,
            text: "from context",
            rating: 10
        }
    ])
    return(
        <FeedbackContext.Provider value={{
            feedback
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext