// @ts-check

import React, { Component } from 'react'
import { List, Map } from 'immutable'
import { Button, Container, Space } from 'rebass'
import Explanation from './components/Explanation'
import ProgressIndicator from './components/ProgressIndicator'
import Question from './components/Question'
import Gift from './components/Gift'
import questions from './questions'
import gifts from './gifts'
import calculateGifts from './calculateGifts'

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
