import React from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'

const ButtonComponent = styled.button`
  ${space};
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  padding: 16px;
  border: 1px solid #e9ecf1;
  border-radius: 4px;
  background: white;
  color: #227af4;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  transition: all 0.1s ease;

  &:hover {
    background: #227af4;
    color: white;
  }
`

const Button = props => <ButtonComponent {...props} />

export default Button
