import React from 'react'
import styled, {injectGlobal} from 'styled-components'

import GithubCorner from 'components/GithubCorner'
import Header from 'components/Header'
import MainSection from 'components/MainSection'
import Footer from 'components/Footer'

// eslint-disable-next-line
injectGlobal`
    body {
      background-position: center;
      background-size: cover;
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-image: url(${process.env.PUBLIC_URL}/background.jpg);
    }
`

const StyledHeader = styled(Header)`
    margin: 2%;
    margin-bottom: 10px;
`

const StyledFooter = styled(Footer)`
    width: 100%;
    margin-top: 10px;
`

export default function App() {
  return (
    <div>
      <GithubCorner />
      <StyledHeader />
      <MainSection />
      <StyledFooter />
    </div>
  )
}
