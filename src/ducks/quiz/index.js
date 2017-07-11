import { List, Map } from 'immutable'
import questions from './questions'
import gifts from './gifts'

const START_QUIZ = 'START_QUIZ'
const ANSWER_QUESTION = 'ANSWER_QUESTION'

export const startQuiz = () => ({ type: START_QUIZ })
export const answerQuestion = answer => ({ type: ANSWER_QUESTION, answer })

export default (
  state = Map({
    currentQuestion: undefined,
    questions,
    gifts,
    answers: List(),
  }),
  action
) => {
  switch (action.type) {
    case START_QUIZ:
      return state.set('currentQuestion', 0)
    case ANSWER_QUESTION:
      return state
        .update('answers', value => value.push(action.answer))
        .update('currentQuestion', value => value + 1)
    default:
      return state
  }
}
