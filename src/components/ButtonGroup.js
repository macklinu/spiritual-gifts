// @ts-check

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Group, ButtonOutline } from 'rebass'

export default ({ labels, onSelected = _ => {} }) =>
  <Group>
    {labels.map((label, index) =>
      <ButtonOutline
        key={label}
        onClick={() => onSelected(index)}
        children={label}
      />
    )}
  </Group>
