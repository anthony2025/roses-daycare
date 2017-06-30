import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GithubCorner from 'components/GithubCorner'
import Header from 'components/Header'
import Routes from 'containers/Routes'
import Footer from 'components/Footer'

App.propTypes = {
  devEmail: PropTypes.string,
  repository: PropTypes.string,
  info: PropTypes.shape({
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string
  })
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.background};
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export default function App(props) {
  return (
    <Wrapper>
      <GithubCorner repository={props.repository} />
      <Header />
      <Routes />
      <Footer
        devEmail={props.devEmail}
        address={props.info.address}
        phone={props.info.phone}
        email={props.info.email}
      />
    </Wrapper>
  )
}
