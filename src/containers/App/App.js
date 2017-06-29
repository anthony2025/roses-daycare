import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GithubCorner from 'components/GithubCorner'
import Header from 'components/Header'
import MainSection from './MainSection'
import Footer from 'components/Footer'

App.propTypes = {
  devEmail: PropTypes.string,
  repository: PropTypes.string,
  pages: PropTypes.object,
  info: PropTypes.shape({
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  })
}

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
        address={props.info.address}
        phone={props.info.phone}
        email={props.info.email}
      />
    </Wrapper>
  )
}
