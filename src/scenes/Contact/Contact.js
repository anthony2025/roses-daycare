import React from 'react'
import styles from './Contact.css'

import {connect} from 'react-redux'
import {getContactInfo} from 'src/store/selectors'

import Title from 'src/components/Title/Title'
import Form from './Form/Form'
import Info from './Info/Info'

function Contact(props) {
  return (
    <div className={styles.contact + ' ' + props.className}>
      <Title
        title="Contact Us"
        subtitle="ASK US A QUESTION"
        className={styles.title}
      />
      <Info className={styles.info} info={props.info} />
      <Form className={styles.form} />
    </div>
  )
}

const mapStateToProps = state => ({
  info: getContactInfo(state)
})

export default connect(mapStateToProps)(Contact)
