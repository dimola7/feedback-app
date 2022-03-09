import { useContext } from "react";
import styled from "styled-components";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const {feedback} = useContext(FeedbackContext);
    // calculate ratings average 
    let average = feedback.reduce((acc:any, cur:any) => {
       return acc + cur.rating
    }, 0) / feedback.length

    // fix to one decimal place, remove decimal if zero follow
    average = Number(average.toFixed(1).replace(/[.,]0$/, ''));

  return (
    <FeedbackStyles>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </FeedbackStyles>
  )
}

export default FeedbackStats

const FeedbackStyles = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`