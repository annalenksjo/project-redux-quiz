import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionImage: './images/yennie.jpg', questionText: 'What was the name of Yennies first horse?', options: ['Tigerlija', 'Mister Opal', 'Skumpande-hoven', 'Meggie '], correctAnswerIndex: 2 },
  { id: 2, questionImage: './images/anna.jpg', questionText: 'Where did Anna meet her boyfriend?', options: ['Grocery store', 'Tinder', 'Hardware store', 'Party'], correctAnswerIndex: 2 },
  { id: 3, questionImage: './images/siri.jpg', questionText: 'What is the name of Siris dog?', options: ['Benny', 'Kenny', 'Lenny', 'Penny'], correctAnswerIndex: 2 },
  { id: 4, questionImage: './images/elle.png', questionText: 'What is the name of Elles cat?', options: ['Bulten', 'Puzzel', 'Snöret'], correctAnswerIndex: 2 },
  { id: 5, questionImage: './images/yennie.jpg', questionText: 'How many sibblings does Yennie have?', options: ['3', '5', '4', '1'], correctAnswerIndex: 2 },
  { id: 6, questionImage: './images/anna.jpg', questionText: 'What sport did Anna do growing up?', options: ['Tennis', 'Ballet', 'Football', 'Gymnastics'], correctAnswerIndex: 3 },
  { id: 7, questionImage: './images/siri.jpg', questionText: 'What country did Siri live in for 3 years?', options: ['USA', 'Australia', 'Norway', 'Thailand'], correctAnswerIndex: 1 },
  { id: 8, questionImage: './images/elle.png', questionText: 'What country is Elles dad from?', options: ['Netherlands', 'Germany', 'Denmark'], correctAnswerIndex: 1 },
  { id: 9, questionImage: './images/yennie.jpg', questionText: 'In what country did Yennie get caught “human trafficing” her friend who lost her passport?', options: ['Guatemala', 'Vietnam', 'Leshoto', 'Palau'], correctAnswerIndex: 0 },
  { id: 10, questionImage: './images/anna.jpg', questionText: 'Whats the name of Annas dog?', options: ['Kira', 'Molly', 'Mira', 'Elsa'], correctAnswerIndex: 0 },
  { id: 11, questionImage: './images/siri.jpg', questionText: 'What does Siri have a Bachelor in?', options: ['Journalism', 'Business', 'Fashion Design', 'Marketing'], correctAnswerIndex: 3 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    }

  }
})
