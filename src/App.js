// @ts-check

import React from 'react'
import { List, Map } from 'immutable'
import { Button, Container } from 'rebass'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import setDisplayName from 'recompose/setDisplayName'
import Explanation from './components/Explanation'
import ProgressIndicator from './components/ProgressIndicator'
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

export default enhance(({ data, onBegin, onAnswered }) =>
  <Container>
    {data.get('currentQuestion') === undefined &&
      <div>
        <h1>Spiritual Gifts Assessment</h1>
        <Explanation />
        <Button onClick={onBegin}>Begin</Button>
      </div>}
    {data.get('currentQuestion') < data.get('totalQuestions') &&
      <div>
        <Question
          text={questions.get(data.get('currentQuestion'))}
          onAnswered={onAnswered}
        />
        <ProgressIndicator
          currentQuestion={data.get('currentQuestion')}
          totalQuestions={data.get('totalQuestions')}
        />
      </div>}
    {data.get('currentQuestion') === data.get('totalQuestions') &&
      <div>
        <h1>Your Spiritual Gifts</h1>
        <ol>
          {calculateGifts(data.get('answers'))
            .take(3)
            .keySeq()
            .map(key => gifts.get(key))
            .map(gift => <Gift {...gift} />)}
        </ol>
      </div>}
  </Container>
)
