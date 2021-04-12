import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const answerArray = useSelector((state) => state.quiz.answers)

  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)

  const onNextQuestionClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setDisabled(false)
    setShowAnswer(false)
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <div>
        {question.options.map((option, index) => {
          const onClickHandler = () => {
            dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
            setDisabled(true)
            setShowAnswer(true)
          }
          return (
            <button
              key={option}
              type="button"
              className="option-btn"
              disabled={disabled}
              onClick={onClickHandler}>
              {option}
            </button>
          )
        })}
      </div>

      <div>
        {showAnswer && (
          answerArray[questionIndex].isCorrect ? 'You were right!' : `You were wrong, this is the correct answer: ${question.options[question.correctAnswerIndex]}`
        )}
      </div>

      <button className="next-btn" type="button" onClick={onNextQuestionClick}>
          Next question
      </button>

    </div>
  )
}
