// @ts-check

import React from 'react'
import { ButtonCircle, Flex, Box, Text } from 'rebass'

export default ({ labels, onSelected = _ => {} }) =>
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
