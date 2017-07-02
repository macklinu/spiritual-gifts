// @ts-check

import React, { Component } from 'react'
import { List, Map } from 'immutable'
import {
  Button,
  Heading,
  Container,
  Panel,
  Progress,
  Space,
  Text,
} from 'rebass'
import ButtonGroup from './components/ButtonGroup'
import Explanation from './components/Explanation'
import questions from './questions'
import gifts from './gifts'
import calculateGifts from './calculateGifts'

const ProgressIndicator = ({ currentQuestion, totalQuestions }) =>
  <Panel theme="info">
    <Text>
      Answered {currentQuestion} of {totalQuestions} questions
    </Text>
    <Space x={1} />
    <Progress value={currentQuestion / totalQuestions} />
  </Panel>

const Question = ({ text, onAnswered }) =>
  <div>
    <Text>
      {text}
    </Text>
    <Space x={2} />
    <ButtonGroup
      labels={['Not at All', 'Sometimes', 'Most of the Time', 'Consistently']}
      onSelected={onAnswered}
    />
  </div>

const Gift = ({ key, gift, description }) =>
  <li key={key}>
    <Heading level={3} size={3}>
      {gift}
    </Heading>
    <Text>
      {description}
    </Text>
  </li>

class App extends Component {
  state = {
    data: Map({
      currentQuestion: undefined,
      totalQuestions: questions.size,
      answers: List(),
    }),
  }

  render() {
    const data = this.state.data
    return (
      <Container>
        {data.get('currentQuestion') === undefined &&
          <div>
            <h1>Spiritual Gifts Assessment</h1>
            <Explanation />
            <Button onClick={this.handleBeginClick}>Begin</Button>
          </div>}
        {data.get('currentQuestion') < data.get('totalQuestions') &&
          <div>
            <Question
              text={questions.get(data.get('currentQuestion'))}
              onAnswered={this.handleAnswered}
            />
            <Space x={2} />
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
  }

  handleBeginClick = () => {
    this.setState(({ data }) => ({ data: data.set('currentQuestion', 0) }))
  }

  handleAnswered = answer => {
    this.setState(({ data }) => ({
      data: data
        .update('answers', value => value.push(answer))
        .update('currentQuestion', value => value + 1),
    }))
  }
}

export default App
