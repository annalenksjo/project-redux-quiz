import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const dispatch = useDispatch()

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  console.log(question.id)

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((option, index) => {
          return (
            <button
              key={option}
              type="button"
              disabled={option.answer}
              onClick={() => dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))}>
              {option}
            </button>
          )
        })}
      </div>

      <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          Next question
      </button>

      <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>
          Check your answers!
      </button>

    </div>
  )
}
