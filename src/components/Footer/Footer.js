import React from 'react'
import styles from './Footer.css'

import {REPOSITORY} from 'src/store/constants'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <a href={REPOSITORY} className={styles.text}>
        Rose's Day Care LLC, 2017
        <br />
        made with ♥ by Anthony Ascencio
      </a>
    </div>
  )
}
