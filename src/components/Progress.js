import React from 'react'
import compose from 'recompose/compose'
import setDisplayName from 'recompose/setDisplayName'
import mapProps from 'recompose/mapProps'
import { Text } from 'rebass'

const enhance = compose(
  setDisplayName('Progress'),
  mapProps(({ currentQuestion, totalQuestions }) => ({
    text: `${currentQuestion + 1} of ${totalQuestions}`,
  }))
)

export default enhance(({ text }) => <Text children={text} />)
