import React from 'react'
import styled from 'styled-components'

import PAGES from 'src/content/pages.json'

import {NavLink} from 'react-router-dom'

const PAGES_WITH_HOME = [
  {
    exact: true,
    path: '/',
    title: 'Home',
    shortTitle: 'Home'
  },
  ...PAGES
]

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    background-color: white;
    font-family: signika;
    margin-top: auto; /* pushes navbar to bottom of flex container */
    height: 30px;
    width: 100%;

    @media (max-width: 700px) {
      margin-left: 0;
    }
    @media (min-width: 700px) {
      margin-left: 10px;
    }
`

const Item = styled(NavLink)`
    color: ${props => props.theme.red};
    &.${'active'} {color: ${props => props.theme.green};}

    @media (max-width: 700px) {
      font-size: 16px;
    }
    @media (min-width: 700px) {
      font-size: 20px;
    }
`

export default function Navbar() {
  return (
    <Wrapper>
      {PAGES_WITH_HOME.map(page =>
        <Item
          exact={page.exact}
          to={page.path}
          key={page.title}
          activeClassName='active'
        >
          {page.shortTitle}
        </Item>
      )}
    </Wrapper>
  )
}
