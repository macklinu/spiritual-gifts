// @ts-check

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonOutline } from 'rebass'

export default class ButtonGroup extends Component {
  static propTypes = {
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelected: PropTypes.func.isRequired,
  }

  static defaultProps = {
    labels: [],
    onSelected: () => {},
  }

  state = {
    selectedValue: undefined,
  }

  render() {
    return (
      <div>
        {this.props.labels.map((label, index) => {
          const rounded =
            index === 0
              ? 'left'
              : index === this.props.labels.length - 1 ? 'right' : false
          return (
            <ButtonOutline
              key={label}
              onClick={this.handleClick(index)}
              rounded={rounded}>
              {label}
            </ButtonOutline>
          )
        })}
      </div>
    )
  }

  handleClick = index => () => {
    this.props.onSelected(index)
  }
}
