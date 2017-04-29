import React from 'react'
import styles from './Contact.css'

import ViewCard from 'src/shared/ViewCard'
import Form from './Form'
import Info from './Info'

export default function Contact ({className}) {
  return (
    <ViewCard
      title='Contact Us'
      subtitle='ASK US A QUESTION'
      bgColor='blue'
    >
      <div className={styles.contact}>
        <Form className={styles.form} />
        <Info className={styles.info} />
      </div>
    </ViewCard>
  )
}
