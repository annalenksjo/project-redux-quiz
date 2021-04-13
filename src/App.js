import React from 'react'
import { Provider } from 'react-redux'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createGlobalStyle } from 'styled-components'
import { quiz } from 'reducers/quiz'
import { QuizWrapper } from 'components/QuizWrapper'
import NowBold from './assets/Now-Bold.otf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Now Bold';
    src: url(${NowBold}) format('truetype');
  }
`

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <QuizWrapper />
    </Provider>
  )
}
