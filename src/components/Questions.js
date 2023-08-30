import { useState } from "react";


function Questions ({numCorrect, setNumCorrect, questionsAnswered, setQuestionsAnswered}) {

    const [n, setN] = useState(0); //this will be used to keep track of the question list index
    const [currAnswer, setCurrAnswer] = useState("");
    const [answerCorrect, setAnswerCorrect] = useState(2);
    const [buttonDisabled, setButtonDisabled] = useState(false); //this will enable and disable the submit button
    const [quizComplete, setQuizComplete] = useState(false);
    const [pc, setPc] = useState(0);

    //list of the questions
    const questions = [
        {
            name: "question-1",
            number : "1",
            prompt: "This is question 1",
            labelA: "First answer",
            labelB: "Correct answer",
            labelC: "Third answer",
            correctAnswer: "b"
        },
        {
            name: "question-2",
            number : "2",
            prompt: "This is question 2",
            labelA: "Correct answer",
            labelB: "Second answer 2",
            labelC: "Third answer 2",
            correctAnswer: "a"
        },
        {
            name: "question-3",
            number : "3",
            prompt: "This is question 3",
            labelA: "First answer 3",
            labelB: "Second answer 3",
            labelC: "Correct answer",
            correctAnswer: "c"
        },
        {
            name: "question-4",
            number : "4",
            prompt: "This is question 4",
            labelA: "First answer 4",
            labelB: "Second answer 4",
            labelC: "Correct answer",
            correctAnswer: "c"
        },
        {
            name: "question-5",
            number : "5",
            prompt: "This is question 5",
            labelA: "Correct answer",
            labelB: "Second answer 5",
            labelC: "Third answer 5",
            correctAnswer: "a"
        },
        {
            name: "question-6",
            number : "6",
            prompt: "This is question 6",
            labelA: "First answer 6",
            labelB: "Correct answer",
            labelC: "Third answer 6",
            correctAnswer: "b"
        },
    ]

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
    
    const handleAnswer = () => {
        
        let lastQ = 0; //will be 1 after last question is answered

        //wait 2 seconds before advancing to the next question
        sleep(2000).then(() => { 
                                 if (n < questions.length - 1) {
                                    setN(n+1); 
                                 } else {
                                    lastQ = 1; //last question was answered
                                 }
                                 setAnswerCorrect(2);
                                 setButtonDisabled(false); //re enable button after the delay
                            });

        setButtonDisabled(true); //disable button until next question loads
        
        let addOne = 0;
        if (currAnswer === questions[n].correctAnswer) {
            addOne = 1; //if the correct answer is selected then add one to number correct
            setAnswerCorrect(1);
        } else {
            setAnswerCorrect(0);
        }

        setNumCorrect(numCorrect + addOne);
        setQuestionsAnswered(questionsAnswered + 1);
        
        //wait a little bit after the above sleep function before checking lastQ was answered
        sleep(2100).then(() => {
            if (lastQ) {
            showResults();
            }
        });
    }
    
    const handleChange = (e) => {
        setCurrAnswer(e.target.value);
    }

    //last question was answsered so remove the form and display the results
    const showResults = () => {
        document.getElementById("quiz-form").remove();
        document.getElementById("submit-button").remove();
        setQuizComplete(true);
        const percentCorrect = numCorrect / questionsAnswered * 100; //*
        setPc(percentCorrect);
    }

    return (
        <div id="questions-container">
            <form action="" id="quiz-form">
                <h4>{questions.length - n} questions left</h4>
                <h3>Question {questions[n].number}</h3>
                <p>{questions[n].prompt}</p>
                <input type="radio" id="a" name={questions[n].name} value="a" onChange={handleChange}/>
                <label for="a">{questions[n].labelA}</label><br/>
                <input type="radio" id="b" name={questions[n].name} value="b" onChange={handleChange}/>
                <label for="b">{questions[n].labelB}</label><br/>
                <input type="radio" id="c" name={questions[n].name} value="c" onChange={handleChange}/>
                <label for="c">{questions[n].labelC}</label>
            </form>
            <button type="submit" onClick={handleAnswer} disabled={buttonDisabled} id="submit-button">Submit</button>
            <div>
                {answerCorrect === 0 ? <h1 id="incorrect-answer">Incorrect</h1> : null}
                {answerCorrect === 1 ? <h1 id="correct-answer">Correct!</h1> : null}
                {quizComplete ? <h1>You got a {pc}%</h1> : null}
            </div>
        </div>
    )
}

export default Questions;