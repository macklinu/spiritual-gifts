import React from 'react'
import { connect } from 'react-redux'
import { Text } from 'rebass'
import { getProgressText } from '../ducks/quiz/selectors'

const Progress = ({ text }) => <Text children={text} />

const mapStateToProps = state => ({
  text: getProgressText(state),
})

export default connect(mapStateToProps)(Progress)
