// @ts-check

import React from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import defaultProps from 'recompose/defaultProps'
import { ButtonCircle, Flex, Box, Text } from 'rebass'

const enhance = compose(
  setDisplayName('ButtonGroup'),
  defaultProps({ labels: [], onSelected: () => {} })
)

export default enhance(({ labels, onSelected }) =>
  <div>
    {labels.map((label, index) =>
      <Flex key={label} align="baseline" my={2}>
        <Box flex="0 1 auto" mr={1}>
          <ButtonCircle
            onClick={() => onSelected(index)}
            children={String.fromCharCode(97 + index).toUpperCase()}
          />
        </Box>
        <Box flex="1 1 auto">
          <Text>
            {label}
          </Text>
        </Box>
      </Flex>
    )}
  </div>
)
