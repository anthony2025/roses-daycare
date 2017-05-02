import React from 'react'
import styles from './Contact.css'

import Title from 'src/core/Title'
import Form from './Form'
import Info from './Info'

export default function Contact ({className}) {
  return (
    <div className={styles.contact + ' ' + className}>
      <Title title='Contact Us' subtitle='ASK US A QUESTION' className={styles.title} />
      <Form className={styles.form} />
      <Info className={styles.info} />
    </div>
  )
}
