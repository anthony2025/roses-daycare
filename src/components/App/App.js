import React from 'react'
import styled from 'styled-components'

import {REPOSITORY} from 'store/constants'

import GithubCorner from 'components/GithubCorner/GithubCorner'
import Header from 'components/Header/Header'
import MainSection from 'components/MainSection/MainSection'
import Footer from 'components/Footer/Footer'

const Wrapper = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    padding: 30px;

    @media (min-width: 700px) {
      padding: 30px;
    }
    @media (max-width: 700px) {
      padding: 10px;
    }
`

export default function App() {
  return (
    <Wrapper>
      <GithubCorner
        repository={REPOSITORY}
        bgColor="white"
        mainColor="#F2787A"
      />
      <Header />
      <MainSection />
      <Footer />
    </Wrapper>
  )
}
