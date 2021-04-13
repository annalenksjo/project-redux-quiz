import React from 'react'
import { quiz } from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

export const StartPage = () => {
  return (
    <div>
      Welcome to this quiz
      <button type="button">START QUIZ</button>
    </div>
  )
}