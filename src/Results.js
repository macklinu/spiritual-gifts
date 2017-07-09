import React from 'react'
import compose from 'recompose/compose'
import mapProps from 'recompose/mapProps'
import setDisplayName from 'recompose/setDisplayName'
import { Flex, Box, Heading } from 'rebass'
import Gift from './components/Gift'
import gifts from './gifts'

const giftWidths = [1, 1, 1 / 3, 1 / 3]

const enhance = compose(
  setDisplayName('Results'),
  mapProps(({ location }) => {
    const params = new URLSearchParams(location.search)
    const giftKeys = [params.get(0), params.get(1), params.get(2)]
    const results = giftKeys.map(result =>
      gifts.get(result, {
        key: result,
        gift: '?',
        description: `Something went wrong - could not find gift for id "${result}".`,
      })
    )
    const rest = gifts.filterNot((_, key) => giftKeys.includes(key)).toList()
    return { results, rest }
  })
)

export default enhance(({ results, rest }) =>
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
)
