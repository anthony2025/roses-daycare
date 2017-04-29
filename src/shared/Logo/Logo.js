import React from 'react'
import styles from './Logo.css'

export default function Logo ({className}) {
  return (
    <div className={styles.logo + ' ' + className}>
      <div className={styles.smallTitle}>Rose's</div>
      <div className={styles.bigTitle}>Daycare</div>
    </div>
  )
}
