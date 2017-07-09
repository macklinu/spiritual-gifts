import React from 'react'
import { Text } from 'rebass'
import ButtonGroup from '../ButtonGroup'

export default ({ text, onAnswered }) =>
  <div>
    <Text>
      {text}
    </Text>
    <ButtonGroup
      labels={['Not at All', 'Sometimes', 'Most of the Time', 'Consistently']}
      onSelected={onAnswered}
    />
  </div>
