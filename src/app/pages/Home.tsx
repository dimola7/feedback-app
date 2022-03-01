import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import FeedbackData from '../data/FeedbackData';
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import AboutIcon from '../components/AboutIcon';

const Home = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id:any) => {
    if(window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  const addFeedback = (newFeedback:any) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback])
  }
  return (
    <>
      <div className="container">
        <FeedbackForm handleAdd={addFeedback}/>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
      <AboutIcon />
    </>
  )
}

export default Home