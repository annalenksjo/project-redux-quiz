import React from 'react'
import { Link } from 'react-router-dom'
import { quiz } from 'reducers/quiz'
// import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

const StartButton = styled.button`
  border: 1px solid grey;
  border-radius: 4px;
  height: 50px;
  width: 250px;
  background-color: rgb(203,200,254);
  margin: 20px;
  font-family: "Now Bold";
  font-size: 18px;
  color: #6A7885;
  cursor: pointer;
  &:hover {
    background-color: #CAEBF2;
  }
  `

const StartText = styled.h1`
    font-size: 40px;
  `

const StartPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `
  const StartImage = styled.img`
  height: 400px;
`


export const StartPage = () => {
  return (
    <StartPageWrapper>
       <StartImage src="" alt="" />
      <StartText>How well do you know your team?</StartText>
      <Link to="/quiz">
        <StartButton type="button"> START QUIZ</StartButton>
      </Link>
    </StartPageWrapper>
  )
}