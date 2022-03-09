import { useState, useEffect, useContext, ChangeEvent, FormEvent } from "react";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Card from "../ui/molecules/Card";
import Button from "../ui/atoms/Button";

const FeedbackForm = () => {
  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if(feedbackEdit.edit === true){
        setBtnDisabled(false);
        setText(feedbackEdit.item.text);
        setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
      if(text === "") {
          setBtnDisabled(true);
          setMessage("");
      } else if(text !== "" && text.trim().length <= 10) {
          setBtnDisabled(true);
          setMessage("Text must be atleast 10 characters")
      } else {
          setMessage("");
          setBtnDisabled(false);
      }
      setText(e.target.value)
  }

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if(text.trim().length > 10) {
          const newFeedback = {
              text,
              rating
          };
          if(feedbackEdit.edit === true){
              updateFeedback(feedbackEdit.item.id, newFeedback)
          } else {
              addFeedback(newFeedback);
          }
          setText("");
      }
  }

  return (
    <Card>
        <form onSubmit={submitHandler}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating:any) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" placeholder="Write a review" onChange={inputHandler} value={text} />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className="message">{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm