import React from 'react'
import styled from 'styled-components'

import shake from 'styling/shakeAnimation'

const Wrapper = styled.div`
    line-height: .75;
    font-family: SignikaBold;
    text-shadow: 1px 1px 1px rgba(255,255,255,.5);

    @media (max-width: 700px) {
      margin-bottom: 15px;
    }
    @media (min-width: 700px) {
      margin-bottom: 0;
    }
`

const BigTitle = styled.div`
    color: white;
    animation: ${shake} 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
    &:active {animation: none;}

    @media (min-width: 700px) {
      font-size: 70px;
    }
    @media (max-width: 700px) {
      font-size: 60px;
    }
`

const SmallTitle = styled.div`
    @media (min-width: 700px) {
      font-size: 50px;
    }
    @media (max-width: 700px) {
      font-size: 40px;
    }
`

export default function Logo () {
  return (
    <Wrapper>
      <SmallTitle>Rose's</SmallTitle>
      <BigTitle>Daycare</BigTitle>
    </Wrapper>
  )
}
