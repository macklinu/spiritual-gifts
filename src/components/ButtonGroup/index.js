// @ts-check

import React from 'react'
import glamorous from 'glamorous'
import Button from '../Button'

const FlexContainer = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
})

export default ({ labels, onSelected }) =>
  <FlexContainer>
    {labels.map((label, index) =>
      <Button key={label} onClick={() => onSelected(index)} outline>
        {label}
      </Button>
    )}
  </FlexContainer>
