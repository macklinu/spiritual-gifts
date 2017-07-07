// @ts-check

import React from 'react'
import { List, Map } from 'immutable'
import glamorous, { ThemeProvider } from 'glamorous'
import compose from 'recompose/compose'
import withState from 'recompose/withState'
import withHandlers from 'recompose/withHandlers'
import setDisplayName from 'recompose/setDisplayName'
import Explanation from './components/Explanation'
import Question from './components/Question'
import QuestionNumber from './components/QuestionNumber'
import Button from './components/Button'
import Gift from './components/Gift'
import Heading from './components/Heading'
import questions from './questions'
import gifts from './gifts'
import calculateGifts from './calculateGifts'
import theme from './theme'

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

const Container = glamorous.div((props, theme) => ({
  fontFamily: theme.fontFamily.sansSerif,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: theme.colors.light,
  color: theme.colors.dark,
}))

const Section = glamorous.div({ width: '75vh' })

export default enhance(({ data, onBegin, onAnswered }) =>
  <ThemeProvider theme={theme}>
    <Container>
      {data.get('currentQuestion') === undefined &&
        <Section>
          <Heading>Spiritual Gifts Assessment</Heading>
          <Explanation />
          <Button onClick={onBegin}>Begin</Button>
        </Section>}
      {data.get('currentQuestion') < data.get('totalQuestions') &&
        <Section>
          <QuestionNumber
            currentQuestion={data.get('currentQuestion')}
            totalQuestions={data.get('totalQuestions')}
          />
          <Question
            text={questions.get(data.get('currentQuestion'))}
            onAnswered={onAnswered}
          />
        </Section>}
      {data.get('currentQuestion') === data.get('totalQuestions') &&
        <Section>
          <Heading>Your Spiritual Gifts</Heading>
          <ol>
            {calculateGifts(data.get('answers'))
              .take(3)
              .keySeq()
              .map(key => gifts.get(key))
              .map(gift => <Gift {...gift} />)}
          </ol>
        </Section>}
    </Container>
  </ThemeProvider>
)
