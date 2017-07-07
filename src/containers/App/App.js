import React from 'react'
import styled from 'styled-components'

import GithubCorner from 'components/GithubCorner'
import Header from 'components/Header'
import Routes from 'containers/Routes'
import Footer from 'components/Footer'

export default function App(props) {
  return (
    <Wrapper>
      <GithubCorner />
      <Header />
      <Routes />
      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: ${props => props.theme.background};
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
