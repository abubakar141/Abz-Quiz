import React, { useState } from 'react';
import { quiz } from '../data';

const QuizComponent = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizCompleted, setIsQuizCompleted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showSprinkles, setShowSprinkles] = useState(false);

  const handleAnswerSelection = (answer:any) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === quiz.questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedAnswer(null);
    if (currentQuestionIndex + 1 < quiz.totalQuestions) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizCompleted(true);
      setShowSprinkles(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIsQuizCompleted(false);
    setShowSprinkles(false);
  };

  return (
    <div className="quiz-container">
      {!isQuizCompleted ? (
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1} of {quiz.totalQuestions}</h2>
          <p>{quiz.questions[currentQuestionIndex].question}</p>
          <ul>
            {quiz.questions[currentQuestionIndex].answers.map((answer, index) => (
              <li key={index} onClick={() => handleAnswerSelection(answer)} className={selectedAnswer === answer ? 'selected' : ''}>
                {answer}
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion} disabled={!selectedAnswer}>Next</button>
        </div>
      ) : (
        <div className="result-container">
          <h2>Quiz Completed!</h2>
          <p>Your score: {score} / {quiz.totalQuestions}</p>
          <button onClick={resetQuiz}>Retake Quiz</button>
          {showSprinkles && (
            <div className="sprinkles">
              <div className="sprinkle" />
              <div className="sprinkle" />
              <div className="sprinkle" />
              {/* Add more sprinkle elements as needed */}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
