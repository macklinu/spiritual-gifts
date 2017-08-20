import React from 'react'
import styled from 'styled-components'
import setDisplayName from 'recompose/setDisplayName'
import { Flex } from 'grid-styled'
import Text from './Text'

const Container = styled(Flex)`
  > * {
    margin: 8px 0 8px 0;
  }
`

export default setDisplayName('Explanation')(() =>
  <Container column>
    <Text>
      This Spiritual Gifts Assessment assumes that all gifts of the Holy Spirit
      mentioned in 1 Corinthians 12, Romans 12, and Ephesians 4 are still given
      to the church.
    </Text>
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
