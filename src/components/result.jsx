import React from 'react'

const result = ({ questionBank, userAnswers, returnQuiz }) => {
  function getScore() {
    let finalScore = 0;

    userAnswers.forEach((answer, index) => {
      if (answer === questionBank[index].answer) {
        finalScore++;
      }
    });
    return finalScore;
  }
  
  const score = getScore();
  return (
      <div className='container mx-auto max-w-2xl m-6 mt-20'>
          <div className='px-4 py-2 bg-cyan-100 rounded-md shadow-2xl space-y-3 pt-8 pb-8'>
          <h2 className='font-serif text-3xl text-center'>Quiz Completed!</h2>
        <p className='font-serif text-center'>Your Score: {score}/{questionBank.length}</p>
              <div className='text-center'>
          <button onClick={returnQuiz} className='font-serif px-4 py-2 rounded-md bg-blue-500 text-white'>Restart Quiz</button>     
              </div>
          </div>
    </div>
  )
}

export default result