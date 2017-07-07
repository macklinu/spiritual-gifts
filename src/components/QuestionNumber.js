import React from 'react'
import Subheading from './Subheading'

export default ({ currentQuestion, totalQuestions }) =>
  <Subheading>
    {currentQuestion + 1} of {totalQuestions}
  </Subheading>
