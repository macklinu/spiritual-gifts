import React from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import defaultProps from 'recompose/defaultProps'
import { Flex, Box } from 'grid-styled'
import Button from './Button'

const enhance = compose(
  setDisplayName('ButtonGroup'),
  defaultProps({ labels: [], onSelected: () => {} })
)

const labels = ['Not at All', 'Sometimes', 'Most of the Time', 'Consistently']

export default enhance(({ onSelected }) =>
  <Flex wrap>
    {labels.map((label, index) =>
      <Box key={label} width={1 / 2} p={2}>
        <Button key={label} onClick={() => onSelected(index)}>
          {label}
        </Button>
      </Box>
    )}
  </Flex>
)
