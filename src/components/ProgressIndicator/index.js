import React from 'react'
import { Panel, Progress, Space, Text } from 'rebass'

export default ({ currentQuestion, totalQuestions }) =>
  <Panel theme="info">
    <Text>
      Answered {currentQuestion} of {totalQuestions} questions
    </Text>
    <Space x={1} />
    <Progress value={currentQuestion / totalQuestions} />
  </Panel>
