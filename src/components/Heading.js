import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const HeadingComponent = styled.h1`
  ${space};
  font-size: 48px;
  font-weight: 700;
  color: #364962;
`

const Heading = props => <HeadingComponent {...props} />

export default Heading
