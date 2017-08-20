import React from 'react'
import styled from 'styled-components'
import { Text as RebassText } from 'rebass'

const TextComponent = styled(RebassText)`
  color: ${({ theme }) => theme.colors.black};
`

const Text = props => <TextComponent {...props} />

export default Text
