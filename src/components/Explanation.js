import React from 'react'
import glamorous from 'glamorous'
import setDisplayName from 'recompose/setDisplayName'
import ButtonGroup from './ButtonGroup'
import { Text } from 'rebass'

const Container = glamorous.div({
  '> *': {
    margin: '16px 0px 16px 0px',
  },
})

export default setDisplayName('Explanation')(() =>
  <Container>
    <Text>
      This Spiritual Gifts Assessment assumes that all gifts of the Holy Spirit
      mentioned in 1 Corinthians 12, Romans 12, and Ephesians 4 are still given
      to the church.
    </Text>
    <Text>Respond to each question according to the following scale:</Text>
    <ButtonGroup
      labels={[
        'Not at All / Never True',
        'Sometimes / True Once in a While',
        'Most of the Time / Usually True',
        'Consistently / Definitely True',
      ]}
    />
    <Text bold>
      Answer according to who you are, not who you would like to be, or think
      you ought to be.
    </Text>
    <Text>
      Don’t labor over each question. Just read it and answer it. Click the
      first answer that pops into your mind.
    </Text>
    <Text>
      Pray before and during the process of taking the assessment. Let God speak
      to you about this. After all, they’re His gifts.
    </Text>
  </Container>
)
