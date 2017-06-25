import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Link} from 'react-router-dom'
import shake from 'styling/shakeAnimation'

Logo.propTypes = {
  smallTitle: PropTypes.string.isRequired,
  bigTitle: PropTypes.string.isRequired
}

const Wrapper = styled(Link)`
    color: ${props => props.theme.text};
    line-height: .75;
    font-family: SignikaSemi;
    text-shadow: 1px 1px 1px rgba(255,255,255,.5);
`

const BigTitle = styled.div`
    animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
    &:active {animation: none;}

    // next three might prevent flickering artifacts ?
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;

    @media (min-width: 700px) {
      font-size: 80px;
    }
    @media (max-width: 700px) {
      font-size: 70px;
    }
`

const SmallTitle = styled.div`
    @media (min-width: 700px) {
      font-size: 60px;
    }
    @media (max-width: 700px) {
      font-size: 50px;
    }
`

export default function Logo(props) {
  return (
    <Wrapper to="/" className={props.className}>
      <SmallTitle>{props.smallTitle}</SmallTitle>
      <BigTitle>{props.bigTitle}</BigTitle>
    </Wrapper>
  )
}
