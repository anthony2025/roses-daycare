import React from 'react'
import styled from 'styled-components'

import {Link} from 'react-router-dom'
import Logo from 'src/components/Logo/Logo'
import Navbar from 'src/components/Navbar/Navbar'

const Wrapper = styled.div`
    display: flex;
    margin-bottom: 30px;

    @media (max-width: 700px) {
      flex-direction: column;
    }
    @media (min-width: 700px) {
      flex-direction: row;
    }
`

export default function Header() {
  return (
    <Wrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Navbar />
    </Wrapper>
  )
}
