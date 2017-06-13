import React from 'react'
import styled from 'styled-components'

import shake from 'src/styling/shakeAnimation'

const Wrapper = styled.div`
    font-weight: bold;
    line-height: .75;
    font-family: signika;

    @media (max-width: 700px) {
      margin-bottom: 25px;
    }
    @media (min-width: 700px) {
      margin-bottom: 0;
    }
`

const BigTitle = styled.div`
    font-size: 80px;
    animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    &:active {animation: none;}
`

const SmallTitle = styled.div`
    font-size: 50px
`

export default function Logo () {
  return (
    <Wrapper>
      <SmallTitle>Rose's</SmallTitle>
      <BigTitle>Daycare</BigTitle>
    </Wrapper>
  )
}
