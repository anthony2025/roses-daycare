import React from 'react'
import styled from 'styled-components'

import GithubCorner from './GithubCorner'
import Header from './Header'
import MainSection from './MainSection'
import Footer from './Footer'

const Wrapper = styled.div`
    background-color: ${props => props.theme.background};
    height: 100%;
    display: flex;
    flex-direction: column;
`

export default function App(props) {
  return (
    <Wrapper>
      <GithubCorner repository={props.repository} />
      <Header pages={props.pages} />
      <MainSection pages={props.pages} />
      <Footer
        devEmail={props.devEmail}
        address={props.address}
        phone={props.phone}
        email={props.email}
      />
    </Wrapper>
  )
}
