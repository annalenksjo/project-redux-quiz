import React from 'react'
import { quiz } from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'

export const Summary = () => {

  const answerArray = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()
  console.log(answerArray)

  return (
    <div>
      <h1>Your Results</h1>
      <h2>5/5</h2>
      {answerArray.map((answer) => {
        return (
          <div key={answer.questionId}>
            <h3>Question: {answer.questionId}</h3>
            <p>You answered: {answer.answer}</p>
            <p>{answer.isCorrect ? 'You were right!' : 'You were wrong!'} </p>
          </div>
        )
      })}
      <button className="next-btn" type="button" onClick={() => dispatch(quiz.actions.restart())}>
          Restart quiz!
      </button>
    </div>
  )
}