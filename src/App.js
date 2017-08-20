// @ts-check

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Box, Flex } from 'grid-styled'
import { Heading as RebassHeading } from 'rebass'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Explanation from './components/Explanation'
import Progress from './components/Progress'
import Question from './components/Question'
import ButtonGroup from './components/ButtonGroup'
import Button from './components/Button'
import { startQuiz, answerQuestion } from './ducks/quiz'
import {
  getAnswers,
  getQuizState,
  getResultsSearchString,
} from './ducks/quiz/selectors'

injectGlobal`
  * { box-sizing: border-box; }
  body, p { margin: 0; }
`

const responsiveWidths = [1, null, 3 / 4]

const Container = styled.div`height: 100vh;`

const QuizContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

const OverflowBox = styled(Box)`
  overflow-y: scroll;
`

const Heading = styled(RebassHeading)`color: #364962;`

const App = ({
  quizState,
  onBegin,
  onAnswered,
  answers,
  resultsSearchString,
}) =>
  <Container>
    {quizState === 'initial' &&
      <Box width={responsiveWidths} p={2}>
        <Heading>Spiritual Gifts Assessment</Heading>
        <Explanation />
        <Button mt={2} onClick={onBegin}>
          Begin
        </Button>
      </Box>}
    {quizState === 'inprogress' &&
      <QuizContainer width={responsiveWidths}>
        <OverflowBox p={2}>
          <Question />
          <Progress mt={2} />
        </OverflowBox>
        <Box>
          <ButtonGroup onSelected={onAnswered} />
        </Box>
      </QuizContainer>}
    {quizState === 'complete' &&
      <Redirect
        to={{
          pathname: '/results',
          search: resultsSearchString,
        }}
      />}
  </Container>

const mapStateToProps = state => ({
  quizState: getQuizState(state),
  answers: getAnswers(state),
  resultsSearchString: getResultsSearchString(state),
})

const mapDispatchToProps = dispatch => ({
  onBegin: () => dispatch(startQuiz()),
  onAnswered: answer => dispatch(answerQuestion(answer)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
