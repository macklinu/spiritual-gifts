import React from 'react'
import { Panel, Progress, Text } from 'rebass'

export default ({ currentQuestion, totalQuestions }) =>
  <Panel theme="info">
    <Text>
      Answered {currentQuestion} of {totalQuestions} questions
    </Text>
    <Progress value={currentQuestion / totalQuestions} />
  </Panel>
