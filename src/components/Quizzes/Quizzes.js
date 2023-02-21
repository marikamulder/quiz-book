import './Quizzes.css';
import QuizData from './TotalQuiz/QuizData/QuizData.js';
import TotalQuiz from './TotalQuiz/TotalQuiz.js';

function Quizzes() {

    return (
        <div className="quizzes">
            <div className='quizOutput'>
                {QuizData.map((value, i) => (
                <div className='quizItem'>
                    <div className='quiz-container'>
                        <TotalQuiz number={i}/>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default Quizzes;