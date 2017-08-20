import React from 'react'
import { connect } from 'react-redux'
import { Flex, Box } from 'rebass'
import Gift from './components/Gift'
import { getGiftResults } from './ducks/quiz/selectors'
import Heading from './components/Heading'

const giftWidths = [1]
const responsiveWidths = [1, null, 3 / 4]

const Results = ({ results, rest }) =>
  <Flex column py={[0, null, 4]} width={responsiveWidths}>
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
