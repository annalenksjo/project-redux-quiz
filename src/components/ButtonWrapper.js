import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { quiz } from '../reducers/quiz'

const QuestionWrapper = styled.div`
  border: 1px solid #9099A5;
  border-radius: 2px;
  box-shadow: 7px 7px #CAEBF2, 7px 7px 0px 1px #9099A5;
  background-color: white;
  margin: 30px;
  width: 400px;
  height: 300px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const QuestionButton = styled.button`
  width: 400px;
  font-size: 16px;
  font-family: "Now Bold";
  color: #6A7885;
  height: 50px;
  margin-bottom: 20px;
  background-color: #CAEBF2;
  border: 1px solid #9099A5;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 7px 7px white, 7px 7px 0px 1px #9099A5;
  &:hover {
    background-color: rgb(203,200,254);
  }
`

export const ButtonWrapper = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answerArray = useSelector((state) => state.quiz.answers)
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const [disabled, setDisabled] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const dispatch = useDispatch()

  return (
    <>
      {question.options.map((option, index) => {
        const onClickHandler = () => {
          dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index }))
          setDisabled(true)
          setShowAnswer(true)
        }
        return (
          <QuestionButton
            key={option}
            type="button"
            disabled={disabled}
            onClick={onClickHandler}>
            {option}
          </QuestionButton>

        )
      })}
      <div>
        {showAnswer && (
          answerArray[questionIndex].isCorrect ? 'You were right!' : `You were wrong, this is the correct answer: ${question.options[question.correctAnswerIndex]}`
        )}
      </div>
    </>
  )

}