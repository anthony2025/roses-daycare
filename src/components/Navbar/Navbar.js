import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'

Navbar.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      exact: PropTypes.bool,
      path: PropTypes.string.isRequired,
      shortTitle: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    font-family: SignikaRegular;
    color: white;
    text-shadow: 1px 1px 1px rgba(255,255,255,.5);
`

const Item = styled(NavLink)`
    &.active,
    &:hover {
      transition: .3s;
      color: ${props => props.theme.primary};
      text-shadow: 0 0 3px rgba(255,255,255,.5);
    }

    @media (max-width: 700px) {
      font-size: 6vw;
    }
    @media (min-width: 700px) and (max-width: 900px) {
      font-size: 4vw;
    }
    @media (min-width: 900px) {
      font-size: 3vw;
    }
`

export default function Navbar(props) {
  return (
    <Wrapper className={props.className}>
      {props.pages.map(page =>
        <Item
          exact={page.exact}
          to={page.path}
          key={page.path}
          activeClassName="active"
        >
          {page.shortTitle}
        </Item>
      )}
    </Wrapper>
  )
}
