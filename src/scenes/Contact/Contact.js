import React from 'react'
import styles from './Contact.css'

import Title from 'src/core/Title'
import Form from './Form'
import Info from './Info'

export default function Contact () {
  return (
    <div className={styles.contact}>
      <Title title='Contact Us' subtitle='ASK US A QUESTION' />
      <div className={styles.contact}>
        <Form className={styles.form} />
        <Info className={styles.info} />
      </div>
    </div>
  )
}
