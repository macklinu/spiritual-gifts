import { List } from 'immutable'
import calculateGifts from './calculateGifts'

test('calculates gifts', () => {
  // fill answers with seed data
  // set a few answers to greater answers to check sorting
  const answers = List(Array(17).fill(0)).set(9, 1).set(1, 2).set(15, 3)

  expect(calculateGifts(answers)).toMatchSnapshot()
})
