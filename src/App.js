import './App.css';
import Questions from './components/Questions';
import { useState } from 'react';

function App() {
  
  const [numCorrect, setNumCorrect] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);

  return (
    <>
      <div id="header-container">
            <h1>Quiz app</h1>
            <h3>{numCorrect} out of {questionsAnswered} answered correctly</h3>
        </div>
      <Questions numCorrect={numCorrect} 
                 setNumCorrect={setNumCorrect}
                 questionsAnswered={questionsAnswered}
                 setQuestionsAnswered={setQuestionsAnswered}
      />
    </>
  );
}

export default App;
