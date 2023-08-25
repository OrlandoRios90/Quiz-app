import { useState } from "react";


function Questions ({numCorrect, setNumCorrect, questionsAnswered, setQuestionsAnswered}) {

    const [n, setN] = useState(0); //this will be used to keep track of the question list index
    const [currAnswer, setCurrAnswer] = useState("");
    
    //list of the questions
    const questions = [
        {
            name: "question-1",
            number : "1",
            prompt: "This is question 1",
            labelA: "First answer",
            labelB: "Second answer",
            labelC: "Third answer",
            correctAnswer: "b"
        },
        {
            name: "question-2",
            number : "2",
            prompt: "This is question 2",
            labelA: "First answer 2",
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
            labelC: "Third answer 3",
            correctAnswer: "c"
        },
        {
            name: "question-4",
            number : "4",
            prompt: "This is question 4",
            labelA: "First answer 4",
            labelB: "Second answer 4",
            labelC: "Third answer 4",
            correctAnswer: "c"
        },
        {
            name: "question-5",
            number : "5",
            prompt: "This is question 5",
            labelA: "First answer 5",
            labelB: "Second answer 5",
            labelC: "Third answer 5",
            correctAnswer: "a"
        },
        {
            name: "question-6",
            number : "6",
            prompt: "This is question 6",
            labelA: "First answer 6",
            labelB: "Second answer 6",
            labelC: "Third answer 6",
            correctAnswer: "b"
        },
    ]

    const handleAnswer = () => {
        setN(n+1); 
        
        //if the correct answer is selected then add one to number correct
        let addOne = 0;
        if (currAnswer === questions[n].correctAnswer) {
            addOne = 1;
        }

        setNumCorrect(numCorrect + addOne);
        setQuestionsAnswered(questionsAnswered + 1);
    }

    const handleChange = (e) => {
        setCurrAnswer(e.target.value);
    }

    return (
        <div id="questions-container">
            <form action="">
                <h3>Question {questions[n].number}</h3>
                <p>{questions[n].prompt}</p>
                <input type="radio" id="a" name={questions[n].name} value="a" onChange={handleChange}/>
                <label for="a">{questions[n].labelA}</label><br/>
                <input type="radio" id="b" name={questions[n].name} value="b" onChange={handleChange}/>
                <label for="b">{questions[n].labelB}</label><br/>
                <input type="radio" id="c" name={questions[n].name} value="c" onChange={handleChange}/>
                <label for="c">{questions[n].labelC}</label>
            </form>
            <button type="submit" onClick={handleAnswer}>Submit</button>
            <p>Curr Answer is {currAnswer}</p>
            <div>
                {currAnswer === questions[n].correctAnswer ? <p>Correct</p> : <p>Incorrect</p>}
            </div>
        </div>
    )
}

export default Questions;