// @ts-check

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { Box, Flex } from 'grid-styled'
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
import Heading from './components/Heading'

injectGlobal`
  * { box-sizing: border-box; }
  body, p { margin: 0; }
`

const responsiveWidths = [1, null, 3 / 4]

const Container = styled(Flex)`height: 100vh;`

const QuizContainer = styled(Flex)`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
`

const ScrollableBox = styled(Box)`
  overflow-y: scroll;
`

const App = ({
  quizState,
  onBegin,
  onAnswered,
  answers,
  resultsSearchString,
}) =>
  <Container py={[0, null, 4]}>
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
        <ScrollableBox p={2}>
          <Question />
          <Progress mt={2} />
        </ScrollableBox>
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
