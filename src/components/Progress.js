import React from 'react'
import mapProps from 'recompose/mapProps'
import { Text } from 'rebass'

const enhance = mapProps(({ currentQuestion, totalQuestions }) => ({
  text: `${currentQuestion + 1} of ${totalQuestions}`,
}))

export default enhance(({ text }) => <Text children={text} />)
