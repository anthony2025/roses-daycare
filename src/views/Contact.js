import React from 'react'
import styles from 'styles/Contact.css'

import Form from 'components/Form.js'
import Info from 'components/Info.js'

export default props => (
  <div class={styles.contact}>
    <div class={styles.title}>Ask us a question!</div>
    <Form parentStyles={styles.form} />
    <Info parentStyles={styles.info} />
  </div>
)
