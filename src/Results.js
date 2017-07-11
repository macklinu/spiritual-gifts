import React from 'react'
import { connect } from 'react-redux'
import { Flex, Box, Heading } from 'rebass'
import Gift from './components/Gift'
import { getGiftResults } from './ducks/quiz/selectors'

const giftWidths = [1, 1, 1 / 3, 1 / 3]

const Results = ({ results, rest }) =>
  <Flex wrap>
    <Box p={2} width={1}>
      <Heading children="Your Spiritual Gifts" />
    </Box>
    {results.map((result, index) =>
      <Box key={result.key} p={2} width={giftWidths}>
        <Gift rank={index + 1} gift={result} />
      </Box>
    )}
  </Flex>

const mapStateToProps = (state, props) => ({ ...getGiftResults(state, props) })

export default connect(mapStateToProps)(Results)
