import React from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import flattenProp from 'recompose/flattenProp'
import { Heading, Card, Relative, Absolute, Subhead, Flex } from 'rebass'
import Text from './Text'

const enhance = compose(setDisplayName('Gift'), flattenProp('gift'))

export default enhance(({ gift, description, rank }) =>
  <Card>
    <Relative>
      <Absolute top left>
        <Subhead p={2} color="white" children={rank} />
      </Absolute>
    </Relative>
    <Flex p={6} bg="blue" justify="center" align="start">
      <Heading color="white" children={gift} />
    </Flex>
    <Text p={2} children={description} />
  </Card>
)
