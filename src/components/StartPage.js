import React from 'react'
import { Link } from 'react-router-dom'
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
    height: 250px;
`

export const StartPage = () => {
  return (
    <StartPageWrapper>
      <StartImage src="./images/startimg.gif" alt="Gif with bear" />
      <StartText>Check how well you know us!</StartText>
      <Link to="/quiz">
        <StartButton type="button">START QUIZ</StartButton>
      </Link>
    </StartPageWrapper>
  )
}