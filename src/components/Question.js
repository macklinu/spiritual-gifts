import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getCurrentQuestionText } from '../ducks/quiz/selectors'

const QuestionText = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: #364962;
`

const Question = ({ text }) =>
  <QuestionText>
    {text}
  </QuestionText>

const mapStateToProps = state => ({
  text: getCurrentQuestionText(state),
})

export default connect(mapStateToProps)(Question)
