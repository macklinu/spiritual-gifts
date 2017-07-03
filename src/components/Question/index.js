import React from 'react'
import { Text, Space } from 'rebass'
import ButtonGroup from '../ButtonGroup'

export default ({ text, onAnswered }) =>
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
