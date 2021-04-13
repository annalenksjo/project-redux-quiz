import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { createGlobalStyle } from 'styled-components'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

import { QuizWrapper } from 'components/QuizWrapper'
import { StartPage } from 'components/StartPage'
import NowBold from './assets/Now-Bold.otf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Now Bold';
    src: url(${NowBold}) format('truetype');
  }
`
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

const reducer = combineReducers({
  quiz: quiz.reducer
})

const store = configureStore({ reducer })

export const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Main>
            <Route path="/" exact>
              <StartPage />
            </Route>
            <Route path="/quiz" exact>
              <QuizWrapper />
            </Route>
          </Main>
        </Switch>
      </BrowserRouter>

    </Provider>
  )
}
