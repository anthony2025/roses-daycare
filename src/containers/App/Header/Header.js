import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Logo from 'components/Logo'
import Navbar from './Navbar'
import {NavLink} from 'react-router-dom'

Header.propTypes = {
  pages: PropTypes.objectOf(
    PropTypes.shape({
      exact: PropTypes.bool,
      path: PropTypes.string,
      name: PropTypes.string.isRequired
    })
  ).isRequired
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

export default function Header(props) {
  const {noMatch, ...pages} = props.pages
  return (
    <Wrapper className={props.className}>
      <StyledLogo smallTitle="Rose's" bigTitle="Daycare" />
      <StyledNavbar>
        {Object.keys(pages).map(key =>
          <NavLink
            exact={pages[key].exact}
            to={pages[key].path}
            key={key}
            activeClassName="active"
          >
            {pages[key].name}
          </NavLink>
        )}
      </StyledNavbar>
    </Wrapper>
  )
}
