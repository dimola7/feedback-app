import './App.css';
import Routers from './app/routes/Routes';
import {FeedbackProvider} from "./app/context/FeedbackContext";

function App() {
  return ( 
    <>
      <FeedbackProvider>
        <Routers />
      </FeedbackProvider>
    </>
  );
}

export default App;
