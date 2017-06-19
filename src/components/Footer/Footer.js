import React from 'react'
import styled from 'styled-components'

import {REPOSITORY} from 'services/constants'

const Wrapper = styled.div`
    text-align: right;
    margin-top: 40px;
`

const Text = styled.a`
    font-size: 12px;

    &:hover {
      transition: 1s;
      color: ${props => props.theme.blue};
    }
`

export default function Footer() {
  return (
    <Wrapper>
      <Text href={REPOSITORY} >
        Rose's Day Care LLC, 2017
        <br />
        made with ♥ by Anthony Ascencio
      </Text>
    </Wrapper>
  )
}
