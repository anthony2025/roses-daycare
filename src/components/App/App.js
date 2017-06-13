import React from 'react'
import styled from 'styled-components'

import {REPOSITORY} from 'src/utils/constants'

import GithubCorner from 'src/components/GithubCorner/GithubCorner'
import Header from 'src/components/Header/Header'
import MainSection from 'src/components/MainSection/MainSection'
import Footer from 'src/components/Footer/Footer'

const Wrapper = styled.div`
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
