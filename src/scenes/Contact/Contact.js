import React from 'react'
import PropTypes from 'prop-types'
import styles from './Contact.css'

import {connect} from 'react-redux'
import {getContactInfo} from 'src/store/selectors'

import Title from 'src/components/Title/Title'
import Form from './Form/Form'
import Info from './Info/Info'

import {post as postToDatabase} from 'src/services/database'
import {DATABASE_URL} from 'src/store/constants'

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

function Contact(props) {
  return (
    <div className={styles.contact}>
      <Title
        title="Contact Us"
        subtitle="ASK US A QUESTION"
        className={styles.title}
      />
      <Info className={styles.info} info={props.info} />
      <Form className={styles.form} onSend={handleSend} />
    </div>
  )
}

const mapStateToProps = state => ({
  info: getContactInfo(state)
})

export default connect(mapStateToProps)(Contact)
