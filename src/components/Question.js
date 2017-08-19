import React from 'react'
import { Lead, Flex } from 'rebass'
import glamorous from 'glamorous'
import { connect } from 'react-redux'
import ButtonGroup from './ButtonGroup'
import { answerQuestion } from '../ducks/quiz'
import { getCurrentQuestionText } from '../ducks/quiz/selectors'

const TextContainer = glamorous(Flex)({
  height: 128,
})

const Question = ({ text, onAnswered }) =>
  <div>
    <TextContainer align="center">
      <Lead>
        {text}
      </Lead>
    </TextContainer>
    <ButtonGroup
      labels={[
        'Not at All / Never True',
        'Sometimes / True Once in a While',
        'Most of the Time / Usually True',
        'Consistently / Definitely True',
      ]}
      onSelected={onAnswered}
    />
  </div>

const mapStateToProps = state => ({
  text: getCurrentQuestionText(state),
})

const mapDispatchToProps = dispatch => ({
  onAnswered: answer => dispatch(answerQuestion(answer)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Question)
