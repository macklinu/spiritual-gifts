import { createSelector } from 'reselect'
import kebabCase from 'lodash/kebabCase'
import calculateGifts from './calculateGifts'

const currentQuestion = ({ quiz }) => quiz.get('currentQuestion')
const questions = ({ quiz }) => quiz.get('questions')
const totalQuestions = createSelector(questions, questions => questions.size)
export const getAnswers = ({ quiz }) => quiz.get('answers')
const gifts = ({ quiz }) => quiz.get('gifts')
const location = (_state, props) => props.location

export const getCurrentQuestionText = createSelector(
  questions,
  currentQuestion,
  (questions, currentQuestion) => questions.get(currentQuestion, '')
)

export const getProgressText = createSelector(
  currentQuestion,
  totalQuestions,
  (currentQuestion, totalQuestions) =>
    `${currentQuestion + 1} of ${totalQuestions}`
)

export const getQuizState = createSelector(
  currentQuestion,
  totalQuestions,
  (currentQuestion, totalQuestions) => {
    if (currentQuestion === undefined) {
      return 'initial'
    } else if (currentQuestion < totalQuestions) {
      return 'inprogress'
    } else if (currentQuestion === totalQuestions) {
      return 'complete'
    }
  }
)

export const getResultsSearchString = createSelector(
  getQuizState,
  getAnswers,
  (quizState, answers) => {
    if (quizState === 'complete') {
      return `?${calculateGifts(answers)
        .take(3)
        .keySeq()
        .map((key, index) => `${index}=${key}`)
        .join('&')}`
    }
    return ''
  }
)

export const getGiftFromId = createSelector(
  gifts,
  (_state, props) => props.match.params.gift,
  (gifts, giftSlug) => {
    return gifts.find(value => kebabCase(value.gift) === giftSlug)
  }
)

export const getGiftResults = createSelector(
  gifts,
  location,
  (gifts, location) => {
    const params = new URLSearchParams(location.search)
    const giftKeys = [params.get(0), params.get(1), params.get(2)]
    const results = giftKeys.map(result =>
      gifts.get(result, {
        key: result,
        gift: '?',
        description: `Something went wrong - could not find gift for id "${result}".`,
      })
    )
    const rest = gifts.filterNot((_, key) => giftKeys.includes(key)).toList()
    return { results, rest }
  }
)
