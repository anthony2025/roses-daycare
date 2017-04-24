import React from 'react'
import styles from './Contact.css'

import ViewCard from 'containers/ViewCard'
import Form from 'components/Form'
import Info from 'components/Info'

export default function Contact ({className}) {
  return (
    <ViewCard
      title='Contact Us'
      subtitle='ASK US A QUESTION'
      bgColor='blue'>
      <div className={styles.contact}>
        <Form className={styles.form} />
        <Info className={styles.info} />
      </div>
    </ViewCard>
  )
}
