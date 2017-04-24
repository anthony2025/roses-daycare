import React from 'react'
import styles from './Footer.css'

export default function Footer ({className}) {
  return (
    <div className={styles.footer + ' ' + className}>
      <a href='https://github.com/anthony2025/roses-daycare' className={styles.text}>
        Rose's Day Care LLC, 2017
        <br />
        made with ♥ by Anthony Ascencio
      </a>
    </div>
  )
}
