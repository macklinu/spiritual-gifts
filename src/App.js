// @ts-check

import React from 'react'
import styled from 'styled-components'
import { Box, Button, Heading, Flex } from 'rebass'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Explanation from './components/Explanation'
import Progress from './components/Progress'
import Question from './components/Question'
import { startQuiz } from './ducks/quiz'
import {
  getAnswers,
  getQuizState,
  getResultsSearchString,
} from './ducks/quiz/selectors'

const responsiveWidths = [1, 3 / 4, 3 / 5, 1 / 2]

const Container = styled(Flex)`height: 100vh;`

const App = ({ quizState, onBegin, answers, resultsSearchString }) =>
  <Container wrap direction="column" align="center" justify="center">
    {quizState === 'initial' &&
      <Box width={responsiveWidths}>
        <Heading>Spiritual Gifts Assessment</Heading>
        <Explanation />
        <Button onClick={onBegin}>Begin</Button>
      </Box>}
    {quizState === 'inprogress' &&
      <Box width={responsiveWidths}>
        <Progress />
        <Question />
      </Box>}
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
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
