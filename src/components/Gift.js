import React from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import flattenProp from 'recompose/flattenProp'
import { Flex, Box } from 'rebass'
import Text from './Text'
import Heading from './Heading'

const enhance = compose(setDisplayName('Gift'), flattenProp('gift'))

export default enhance(({ gift, description, rank }) =>
  <Flex align="start">
    <Box>
      <Heading mb={2} color="white" children={`${rank}. ${gift}`} />
      <Text children={description} />
    </Box>
  </Flex>
)
