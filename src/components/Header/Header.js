import React from 'react'
import styled from 'styled-components'

import Logo from 'components/Logo'
import Navbar from 'components/Navbar'

const Wrapper = styled.div`
    display: flex;
    @media (max-width: 700px) {
      flex-direction: column;
    }
    @media (min-width: 700px) {
      flex-direction: row;
    }
`

const StyledLogo = styled(Logo)`
    @media (max-width: 700px) {
      margin-bottom: 25px;
    }
    @media (min-width: 700px) {
      margin-bottom: 0;
    }
`

const StyledNavbar = styled(Navbar)`
    margin-top: auto;
    width: 100%;
`

export default function Header(props) {
  return (
    <Wrapper className={props.className}>
      <StyledLogo />
      <StyledNavbar />
    </Wrapper>
  )
}
