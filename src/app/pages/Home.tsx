import { useEffect, useState } from "react";
import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import AboutIcon from '../components/AboutIcon';
import PreLoader from '../components/PreLoader';

const Home = () => {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setShowLoader(true)
    setTimeout(() => { setShowLoader(false) }, 4000);
  }, [])
  

  return showLoader ? <PreLoader /> : (
    <>
      <div className="container">
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
      </div>
      <AboutIcon />
    </>
  )
}

export default Home