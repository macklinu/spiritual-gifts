// @ts-check

import React from 'react'
import { List, Map } from 'immutable'
import { Box, Button, Heading, Flex } from 'rebass'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import setDisplayName from 'recompose/setDisplayName'
import Explanation from './components/Explanation'
import Progress from './components/Progress'
import Question from './components/Question'
import Gift from './components/Gift'
import questions from './questions'
import gifts from './gifts'
import calculateGifts from './calculateGifts'

const enhance = compose(
  setDisplayName('App'),
  withState(
    'data',
    'updateData',
    Map({
      currentQuestion: undefined,
      totalQuestions: questions.size,
      answers: List(),
    })
  ),
  withHandlers({
    onBegin: ({ updateData }) => () =>
      updateData(data => data.set('currentQuestion', 0)),
    onAnswered: ({ updateData }) => answer =>
      updateData(data =>
        data
          .update('answers', value => value.push(answer))
          .update('currentQuestion', value => value + 1)
      ),
  })
)

const responsiveWidths = [1, 3 / 4, 3 / 5, 1 / 2]

export default enhance(({ data, onBegin, onAnswered }) =>
  <Flex wrap direction="column" align="center" justify="center">
    {data.get('currentQuestion') === undefined &&
      <Box width={responsiveWidths}>
        <Heading>Spiritual Gifts Assessment</Heading>
        <Explanation />
        <Button onClick={onBegin}>Begin</Button>
      </Box>}
    {data.get('currentQuestion') < data.get('totalQuestions') &&
      <Box width={responsiveWidths}>
        <Progress
          currentQuestion={data.get('currentQuestion')}
          totalQuestions={data.get('totalQuestions')}
        />
        <Question
          text={questions.get(data.get('currentQuestion'))}
          onAnswered={onAnswered}
        />
      </Box>}
    {data.get('currentQuestion') === data.get('totalQuestions') &&
      <Box>
        <h1>Your Spiritual Gifts</h1>
        <ol>
          {calculateGifts(data.get('answers'))
            .take(3)
            .keySeq()
            .map(key => gifts.get(key))
            .map(gift => <Gift {...gift} />)}
        </ol>
      </Box>}
  </Flex>
)
