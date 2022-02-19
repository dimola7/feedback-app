import styled from "styled-components";
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
        {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
    </FeedbackDiv>
  )
}

const FeedbackDiv = styled.div`
`

export default FeedbackList