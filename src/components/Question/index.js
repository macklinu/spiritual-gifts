import React from 'react'
import { Lead, Flex } from 'rebass'
import ButtonGroup from '../ButtonGroup'
import styled from 'styled-components'

const TextContainer = styled(Flex)`height: ${props => props.height || '128px'};`

export default ({ text, onAnswered }) =>
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
