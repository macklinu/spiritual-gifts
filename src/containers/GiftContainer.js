import React from 'react'
import { connect } from 'react-redux'
import { getGiftFromId } from '../ducks/quiz/selectors'
import { Flex, Heading, Text } from 'rebass'

class GiftContainer extends React.Component {
  render() {
    if (this.props.gift) {
      const { gift, description } = this.props.gift
      return (
        <Flex p={2} direction="column">
          <Heading>
            {gift}
          </Heading>
          <Text>
            {description}
          </Text>
        </Flex>
      )
    }
    // TODO redirect to not found URL
    return null
  }
}

const mapStateToProps = (state, props) => ({
  gift: getGiftFromId(state, props),
})

export default connect(mapStateToProps)(GiftContainer)
