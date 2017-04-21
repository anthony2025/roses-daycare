import React from 'react'
import styles from './Contact.css'

import Title from 'src/Title'
import Form from 'src/Form'
import Info from 'src/Info'

export default ({className}) => (
  <div className={styles.contact}>
    <Title className={styles.title}
          bigTitle='Contact Us'
          smallTitle='ASK US A QUESTION' />
    <Form className={styles.form} />
    <Info className={styles.info} />
  </div>
)
