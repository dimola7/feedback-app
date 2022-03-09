import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";
import Card from "../ui/molecules/Card";
import {FaTimes, FaEdit} from "react-icons/fa";

interface Props {
    item: any,
}

const FeedbackItem = ({item}:Props) => {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext);

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => deleteFeedback(item.id)}>
            <FaTimes color="#1e3799" />
        </button>
        <button className="edit" onClick={() => editFeedback(item)}>
          <FaEdit color="#1e3799"/>
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

export default FeedbackItem