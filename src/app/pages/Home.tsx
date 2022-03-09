import FeedbackList from '../components/FeedbackList';
import FeedbackStats from '../components/FeedbackStats';
import FeedbackForm from '../components/FeedbackForm';
import AboutIcon from '../components/AboutIcon';

const Home = () => {
  return (
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