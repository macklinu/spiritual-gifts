import React from 'react'
import { Heading, Text } from 'rebass'

export default ({ key, gift, description }) =>
  <li key={key}>
    <Heading level={3} size={3}>
      {gift}
    </Heading>
    <Text>
      {description}
    </Text>
  </li>
