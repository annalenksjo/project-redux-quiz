import React, {useState} from 'react'
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
const AboutMe = styled.div`
 display:flex;
 align-items: center;
 justify-content: center;
 border: solid 1px #9099A5;
 border-radius: 2px;
 box-shadow: 5px 5px #fefeff, 5px 5px 0px 1px #9099A5;
 background-color: #c4ecf4;
 position:absolute;
 top:0;
 bottom:300px;
 left:0;
 right:0;
 width: 200px;
 height: 40px;
 margin: auto;
 text-align: center;
`

const QuestionImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-top: 10px;
`

const Question = styled.h1`
  padding: 10px;
  text-align: center;
  font-size: 20px;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
  box-shadow: 7px 7px white, 7px 7px 0px 1px #9099A5;
  &:hover {
    background-color: rgb(203,200,254);
  }
`

const NextButton = styled.button`
  border: 1px solid grey;
  border-radius: 4px;
  height: 50px;
  width: 250px;
  background-color: rgb(203,200,254);
  margin: 20px;
  font-size: 18px;
  font-family: "Now Bold";
  color: #6A7885;
  &:hover {
    background-color: #CAEBF2;
  }
`


export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questionIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const answerArray = useSelector((state) => state.quiz.answers)
  const questionsArray = useSelector((state) => state.quiz.questions)

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
    <>
      <QuestionWrapper>
        <AboutMe>
          GUESS ABOUT ME
        </AboutMe>
        <QuestionImage src={question.questionImage} alt="" />
        <Question>{question.questionText}</Question>
      </QuestionWrapper>
      <ButtonWrapper>
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
      </ButtonWrapper>

      <div>
        {showAnswer && (
          answerArray[questionIndex].isCorrect ? 'You were right!' : `You were wrong, this is the correct answer: ${question.options[question.correctAnswerIndex]}`
        )}
      </div>

      <NextButton type="button" onClick={onNextQuestionClick}>
        {questionIndex + 1 === questionsArray.length ? 'SUBMIT' : 'NEXT QUESTION'}
      </NextButton>
      <p>Question: {questionIndex + 1} / {questionsArray.length}</p>
    </>
  )
}
