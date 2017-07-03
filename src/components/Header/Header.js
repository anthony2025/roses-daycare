import React from 'react'
import styled from 'styled-components'

import Logo from 'components/Logo'
import Navbar from 'components/Navbar'
import {NavLink} from 'react-router-dom'

export default function Header(props) {
  return (
    <Wrapper className={props.className}>
      <StyledLogo smallTitle="Rose's" bigTitle="Daycare" />
      <StyledNavbar>
        <NavLink exact={true} to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/news" activeClassName="active">
          News
        </NavLink>
        <NavLink to="/gallery" activeClassName="active">
          Gallery
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </StyledNavbar>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 25px;
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
