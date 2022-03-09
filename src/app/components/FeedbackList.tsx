import { useContext } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import FeedbackContext from "../context/FeedbackContext";
import Loader from "./Loader";

const FeedbackList = () => {
    const {feedback, isLoading} = useContext(FeedbackContext);

    if(!isLoading && (!feedback || feedback.length === 0)) {
        return <p>No feedback yet</p>
    }
  return isLoading ? <Loader /> : (
    <FeedbackDiv>
        <AnimatePresence>
            {feedback.map((item:any) => (
                <motion.div key={item.id} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}> 
                    <FeedbackItem key={item.id} item={item} />
                </motion.div>
            ))}
        </AnimatePresence>
    </FeedbackDiv>
  )
}

const FeedbackDiv = styled.div`
`

export default FeedbackList