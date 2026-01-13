import React from 'react'
import { useState } from 'react'
import Result from './result.jsx'

const questionBank = [
    {
        question: 'What is the capital city of France?',
        options: ['Berlin', 'London', 'Paris', 'Rome'],
        answer: 'Paris'
    },
    {
        question: 'Which language is used for web apps?',
        options: ['PHP', 'Python', 'JavaScript', 'All'],
        answer: 'All'
    },
    {
        question: 'What does JSX stand for?',
        options: ['JavaScript XML', 'Java Syntax eXtension', 'Just a Simple eXample', 'None of the above'],
        answer: 'JavaScript XML'
    }
]
const Quiz = () => {

    const initialAnswers = [null, null, null]

    const [userAnswers, setUserAnswers] = useState(initialAnswers)
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [isQuizCompleted, setIsQuizCompleted] = useState(false)

    const handleSelectOption = (option) => {
        const newUserAnswers = [...userAnswers]
        newUserAnswers[currentQuestion] = option;

        setUserAnswers(newUserAnswers);
    }

    const selectedAnswers = userAnswers[currentQuestion]

    const goToNext = () => {
        if (currentQuestion === questionBank.length - 1) {
            setIsQuizCompleted(true)
        } else {
            setCurrentQuestion(currentQuestion + 1)
        }
     }
    const goToPrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1)
        }
    }

    function returnQuiz() {
        setUserAnswers(initialAnswers);
        setCurrentQuestion(0);
        setIsQuizCompleted(false);
    }

    if (isQuizCompleted) {
        return <Result questionBank={questionBank} userAnswers={userAnswers} returnQuiz={returnQuiz}/>
    }
    
    
  return (
      <div className='container mx-auto max-w-2xl m-6 mt-14'>
        <div className='px-4 py-2 bg-cyan-100 rounded-md shadow-2xl space-y-3 pt-8 pb-8'>
              <h1 className='font-serif text-center text-4xl'>Quiz App</h1>
              <h2 className='font-serif text-center text-2xl'>Question {currentQuestion + 1}</h2>
              <p>{questionBank[currentQuestion].question}</p>
              {questionBank[currentQuestion].options.map((option,index) => (
                  <button key={index} onClick={() => handleSelectOption(option)} className={'option' + (selectedAnswers === option ? ' selected' : '')}>{option}</button>
              ))}

              <div className='flex flex-row items-center justify-between'>
                  <button onClick={goToPrevious} disabled={currentQuestion === 0} className='font-serif px-4 py-2 rounded-md bg-blue-500 text-white'>Previous</button>
                  <button onClick={goToNext} disabled={!selectedAnswers} className='font-serif px-4 py-2 rounded-md bg-blue-500 text-white'>{currentQuestion === questionBank.length - 1 ? 'Finish Quiz': 'Next'}</button>
              </div>
      </div>
      </div>
  )
}

export default Quiz