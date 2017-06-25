import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Form from './Form'
import Info from './Info'

Home.propTypes = {
  info: PropTypes.shape({
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address1: PropTypes.string.isRequired,
    address2: PropTypes.string.isRequired,
    facebook: PropTypes.string.isRequired
  }).isRequired
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 500px) {
      font-size: 15px;
      padding: 40px 5%;
    }
    @media (min-width: 500px) and (max-width: 950px) {
      font-size: 19px;
      padding: 40px 20%;
    }
    @media (min-width: 950px) {
      font-size: 20px;
      padding: 40px 30%;
    }
`

const StyledInfo = styled(Info)`
    width: 100%;
    margin-top: 20px;
`

const StyledForm = styled(Form)`
    width: 100%;
    margin-top: 20px;
`

export default function Home(props) {
  return (
    <Wrapper className={props.className}>
      <StyledInfo
        email={props.info.email}
        phone={props.info.phone}
        address1={props.info.address1}
        address2={props.info.address2}
        facebook={props.info.facebook}
      />
      <StyledForm />
    </Wrapper>
  )
}
