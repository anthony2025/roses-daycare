import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Navbar.propTypes = {
  children: PropTypes.node
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  font-family: SignikaRegular;
  color: ${props => props.theme.primary};
  text-shadow: 1px 1px 1px rgba(255, 255, 255, .4);

  & > *.active,
  & > *:hover {
    transition: .3s;
    color: ${props => props.theme.accent};
    text-shadow: none;
  }

  @media (min-width: 900px) {
    font-size: 3.5vw;
  }
  @media (min-width: 700px) and (max-width: 900px) {
    font-size: 4vw;
  }
  @media (max-width: 700px) {
    font-size: 6vw;
  }
`

export default function Navbar(props) {
  return (
    <Wrapper className={props.className}>
      {props.children}
    </Wrapper>
  )
}
