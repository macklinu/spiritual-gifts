import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { getProgressText } from '../ducks/quiz/selectors'

const Text = styled.p`
  opacity: 0.5;
  color: #364962;
  font-size: 20px;
  margin: 8px 0 8px 0;
`

const Progress = ({ text }) => <Text children={text} />

const mapStateToProps = state => ({
  text: getProgressText(state),
})

export default connect(mapStateToProps)(Progress)
