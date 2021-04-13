import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Summary } from 'components/Summary'
import { StartPage } from 'components/StartPage'

const Main = styled.main`
display: flex;
flex-direction: column;
height: 100vh;
width: 100vw;
justify-content: center;
align-items: center;
background-image: linear-gradient(#CBC7FE, #B9DEFF);
box-sizing: border-box;
font-family: "Now Bold";
color: #6A7885;
`

export const QuizWrapper = () => {
  const isQuizOver = useSelector((state) => state.quiz.quizOver)
  const questionNumber = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  return (
    <Main>
    {/* <StartPage /> */}
      {isQuizOver ? <Summary /> : <CurrentQuestion />}
    </Main>
  )
}