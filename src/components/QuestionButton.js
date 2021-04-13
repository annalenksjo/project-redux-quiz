import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { quiz } from '../reducers/quiz'

export const QuestionButton = styled.button`
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