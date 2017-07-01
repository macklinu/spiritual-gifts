// @ts-check

import { Map } from 'immutable'

export default answers =>
  answers.reduce(reduceAnswersToMap, Map()).sort(sortGreatestToLeast)

const mapColumnToGiftKey = column => String.fromCharCode(97 + column)

const reduceAnswersToMap = (map, answer, index) => {
  const column = index % 17
  const key = mapColumnToGiftKey(column)
  return map.update(key, value => (value || 0) + answer)
}

const sortGreatestToLeast = (a, b) => (a < b ? 1 : a > b ? -1 : 0)
