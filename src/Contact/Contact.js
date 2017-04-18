import React from 'react'
import styles from './Contact.css'

import Form from 'src/Form'
import Info from 'src/Info'

export default props => (
  <div class={styles.contact}>
    <div class={styles.title}>Ask us a question!</div>
    <Form parentStyles={styles.form} />
    <Info parentStyles={styles.info} />
  </div>
)
