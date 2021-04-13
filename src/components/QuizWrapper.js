import React from 'react'
import { useSelector } from 'react-redux'
import { CurrentQuestion } from 'components/CurrentQuestion'
import { Summary } from 'components/Summary'

export const QuizWrapper = () => {
  const isQuizOver = useSelector((state) => state.quiz.quizOver)

  return (
    <>
      {isQuizOver ? <Summary /> : <CurrentQuestion />}
    </>
  )
}