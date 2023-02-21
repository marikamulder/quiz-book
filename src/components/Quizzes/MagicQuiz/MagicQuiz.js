import { useState } from "react";
import QuizData from './QuizData/QuizData.js';

function MagicQuiz() {
    
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
        score: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
    })

    const onClickNext = () => {
        setSelectedAnswerIndex(null)
        setResult((prev) =>
            selectedAnswer
            ? {
                ...prev,
                score: prev.score + 5,
                correctAnswers: prev.correctAnswers + 1,
                }
            : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
        )
        if (activeQuestion !== QuizData[0].content.length - 1) {
          setActiveQuestion((prev) => prev + 1)
        } else {
          setActiveQuestion(0)
          setShowResult(true)
        }
    }

    const onAnswerSelected = (answer, index) => {
        setSelectedAnswerIndex(index)
        if (answer === correct) {
          setSelectedAnswer(true)
        } else {
          setSelectedAnswer(false)
        }
    }

    const onClickRestart = () => {
        setShowResult(false)
        setActiveQuestion(0)
        setResult({
                score: 0,
                correctAnswers: 0,
                wrongAnswers: 0
        })
    }

    const { question, answerOptions, correct } = QuizData[0].content[activeQuestion]
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
    
    return (
        <div>
            <h1>{QuizData[0].title}</h1>
            {!showResult ? (
            <div>
                <div className='quiz-number'>
                    <span className="active-question-no">
                    {addLeadingZero(activeQuestion + 1)}
                    </span>
                    <span className="total-question">
                    /{addLeadingZero(QuizData[0].content.length)}
                    </span>
                </div>
                <h2>{question}</h2>
                <ul className='ul-container'>
                    {answerOptions.map((answer, index) => (
                    <li onClick={() => onAnswerSelected(answer, index)} key={answer}
                    className={selectedAnswerIndex === index ? 'selected-answer' : null}>
                    {answer}
                    </li>
                    ))}
                </ul>
                <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>{activeQuestion === QuizData[0].content.length - 1 ? 'Finish' : 'Next'}</button>
            </div> ) : (
            <div className="result">
            <h3>Result</h3>
            <p>
                Total Question: <span>{QuizData[0].content.length}</span>
            </p>
            <p>
                Total Score:<span> {result.score}</span>
            </p>
            <p>
                Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
                Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
            <button onClick={onClickRestart}>Restart</button>
            </div>
        )}
        </div>
    );
}

export default MagicQuiz;