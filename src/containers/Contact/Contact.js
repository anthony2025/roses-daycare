import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Form from './Form'
import Info from './Info'

Contact.propTypes = {
  form: PropTypes.shape({
    fields: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
    sendHandler: PropTypes.func.isRequired,
    changeHandler: PropTypes.func.isRequired
  }),
  info: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string
  })
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

export default function Contact(props) {
  return (
    <Wrapper className={props.className}>
      <StyledInfo
        email={props.info.email}
        phone={props.info.phone}
        address1={props.info.address1}
        address2={props.info.address2}
      />
      <StyledForm
        fields={props.form.fields}
        sendHandler={props.form.sendHandler}
        changeHandler={props.form.changeHandler}
      />
    </Wrapper>
  )
}
