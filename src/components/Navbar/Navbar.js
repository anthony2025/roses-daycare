import React from 'react'
import styled from 'styled-components'
import {darken} from 'polished'

import pages from 'content/pages.json'

import {NavLink} from 'react-router-dom'

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    font-family: SignikaRegular;
    margin-top: auto; /* pushes navbar to bottom of flex container */
    height: 30px;
    width: 100%;
    text-shadow: 0 0 1px white;

    @media (max-width: 700px) {
      margin-left: 0;
    }
    @media (min-width: 700px) {
      margin-left: 10px;
    }
`

const Item = styled(NavLink)`
    color: ${props => props.theme.red};
    &.${'active'} {
      color: ${props => darken(.1, props.theme.green)};
      text-shadow: 0 0 20px white;
    }

    @media (min-width: 700px) {
      font-size: 3vw;
    }
    @media (max-width: 700px) {
      font-size: 5vw;
    }
`

const filteredPages = Object.keys(pages)
  .filter(key => 'noMatch' !== key)
  .reduce((acc, curr) => ({...acc, [curr]: pages[curr]}), {})

export default function Navbar() {
  return (
    <Wrapper>
      {Object.keys(filteredPages).map(key =>
        <Item
          exact={filteredPages[key].exact || false}
          to={filteredPages[key].path || ''}
          key={key}
          activeClassName="active"
        >
          {filteredPages[key].shortTitle}
        </Item>
      )}
    </Wrapper>
  )
}
