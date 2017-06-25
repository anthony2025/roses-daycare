import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Navbar.propTypes = {
  children: PropTypes.node.isRequired
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;

    font-family: SignikaRegular;
    color: ${props => props.theme.text};
    text-shadow: 1px 1px 1px rgba(255,255,255,.5);

    & > *.active,
    & > *:hover {
      transition: .3s;
      color: ${props => props.theme.primary};
      text-shadow: none;
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
      {props.children}
    </Wrapper>
  )
}
