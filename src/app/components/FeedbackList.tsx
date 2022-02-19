import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

interface Props {
    feedback: Array<Type>;
    handleDelete: (id:any) => void
}

interface Type {
    id: number;
    rating: number;
    text: string;
}

const FeedbackList = ({feedback, handleDelete}:Props) => {
    if(!feedback || feedback.length === 0) {
        return <p>No feedback yet</p>
    }
  return (
    <FeedbackDiv>
        <AnimatePresence>
            {feedback.map((item) => (
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}> 
                    <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
                </motion.div>
            ))}
        </AnimatePresence>
    </FeedbackDiv>
  )
}

const FeedbackDiv = styled.div`
`

export default FeedbackList