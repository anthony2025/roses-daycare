import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GithubCorner from './GithubCorner'
import Header from './Header'
import MainSection from './MainSection'
import Footer from './Footer'

App.propTypes = {
  devEmail: PropTypes.string.isRequired,
  repository: PropTypes.string.isRequired,
  pages: PropTypes.object.isRequired,
  info: PropTypes.shape({
    address: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired
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
