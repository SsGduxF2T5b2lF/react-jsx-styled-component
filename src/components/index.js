import React from 'react'
import styled from 'styled-components'

const P = styled.p`
  color: red;
`

export const Text = ({ ...props }) => {
  const { label, ...rest } = props || {}
  return <P {...rest}>Lele {label}</P>
}
