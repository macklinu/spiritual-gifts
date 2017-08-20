import React from 'react'
import { connect } from 'react-redux'
import { getCurrentQuestionText } from '../ducks/quiz/selectors'
import Heading from './Heading'

const Question = ({ text }) =>
  <Heading>
    {text}
  </Heading>

const mapStateToProps = state => ({
  text: getCurrentQuestionText(state),
})

export default connect(mapStateToProps)(Question)
