import React from 'react'
import styles from './Contact.css'

import Title from 'src/components/Title/Title'
import Form from './Form/Form'
import Info from './Info/Info'

export default function Contact ({className}) {
  return (
    <div className={styles.contact + ' ' + className}>
      <Title title='Contact Us' subtitle='ASK US A QUESTION' className={styles.title} />
      <Info className={styles.info} />
      <Form className={styles.form} />
    </div>
  )
}
