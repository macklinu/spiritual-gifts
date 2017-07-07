import React from 'react'
import Text from '../Text'
import ButtonGroup from '../ButtonGroup'

export default ({ text, onAnswered }) =>
  <div>
    <Text padded>
      {text}
    </Text>
    <ButtonGroup
      labels={['Not at All', 'Sometimes', 'Most of the Time', 'Consistently']}
      onSelected={onAnswered}
    />
  </div>
