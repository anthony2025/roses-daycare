import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {connect} from 'react-redux'
import {getContactInfo} from 'store/selectors'

import Title from 'components/Title/Title'
import Form from './Form/Form'
import Info from './Info/Info'

import {post as postToDatabase} from 'services/database'
import {DATABASE_URL} from 'store/constants'

Contact.propTypes = {
  info: PropTypes.object.isRequired
}

const handleSend = formData => {
  const payload = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    question: formData.question.trim(),
    date: new Date().toJSON().slice(0, 10)
  }
  // all fields required, if any is empty break
  if (payload.name && payload.email && payload.question) {
    const url = DATABASE_URL + 'questions.json'
    postToDatabase(payload, url)
  }
}

const Wrapper = styled.div`
    background-color: ${props => props.theme.blue};
    border: 6px solid white;
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

function Contact(props) {
  return (
    <Wrapper>
      <Title title={props.title} subtitle={props.subtitle} />
      <Info info={props.info} />
      <Form onSend={handleSend} />
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  info: getContactInfo(state)
})

export default connect(mapStateToProps)(Contact)
