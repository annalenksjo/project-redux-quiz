import React from 'react'
import { quiz } from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const SummaryWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const SummaryImage = styled.img`
  height: 200px;
`

const FeedbackText = styled.h2`
  font-size: 24px;
`

const RestartButton = styled.button`
  border: 1px solid grey;
  border-radius: 4px;
  height: 50px;
  width: 250px;
  background-color: rgb(203,200,254);
  margin: 20px;
  font-family: "Now Bold";
  font-size: 18px;
  color: #6A7885;
  &:hover {
    background-color: #CAEBF2;
  }
  `

export const Summary = () => {
  const answerArray = useSelector((state) => state.quiz.answers)
  const questionsArray = useSelector((state) => state.quiz.questions)
  const dispatch = useDispatch()

  const correctAnswers = answerArray.filter((answer) => {
    return answer.isCorrect === true
  })

  return (
    <SummaryWrapper>
      <h1>Your Results</h1>
      <FeedbackText>You got {correctAnswers.length}/{questionsArray.length}</FeedbackText>

      {correctAnswers.length < 3 && (
        <>
          <SummaryImage src="./images/fail.gif" alt="At least you tried gif" />
          <FeedbackText>Not that great to be honest...</FeedbackText>
        </>
      )}

      {correctAnswers.length > 3 && correctAnswers.length <= 8 && (
        <>
          <SummaryImage src="./images/ok.gif" alt="You did ok gif" />
          <FeedbackText>You know your team pretty well!</FeedbackText>
        </>
      )}

      {correctAnswers.length >= 9 && (
        <>
          <SummaryImage src="./images/success.gif" alt="Amazing job gif" />
          <FeedbackText>OMG amazing job!</FeedbackText>
        </>
      )}

      <RestartButton type="button" onClick={() => dispatch(quiz.actions.restart())}>
          RESTART QUIZ!
      </RestartButton>
    </SummaryWrapper>
  )
}