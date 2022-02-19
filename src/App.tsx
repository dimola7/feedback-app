import './App.css';
import { useState } from 'react';
import Header from './app/components/Header';
import FeedbackData from './app/data/FeedbackData';
import FeedbackList from './app/components/FeedbackList';
import FeedbackStats from './app/components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id:any) => {
    if(window.confirm("Are you sure you want to delete?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  
  return ( 
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
      </div>
    
    </>
  );
}

export default App;
