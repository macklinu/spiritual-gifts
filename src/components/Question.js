import React from 'react'
import { Lead, Flex } from 'rebass'
import styled from 'styled-components'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import ButtonGroup from './ButtonGroup'

const TextContainer = styled(Flex)`height: ${props => props.height || '128px'};`

const enhance = compose(setDisplayName('Question'))

export default enhance(({ text, onAnswered }) =>
  <div>
    <TextContainer align="center">
      <Lead>
        {text}
      </Lead>
    </TextContainer>
    <ButtonGroup
      labels={[
        'Not at All / Never True',
        'Sometimes / True Once in a While',
        'Most of the Time / Usually True',
        'Consistently / Definitely True',
      ]}
      onSelected={onAnswered}
    />
  </div>
)
