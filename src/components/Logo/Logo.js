import React from 'react'
import styles from './Logo.css'

export default function Logo () {
  return (
    <div className={styles.logo}>
      <div className={styles.smallTitle}>Rose's</div>
      <div className={styles.bigTitle}>Daycare</div>
    </div>
  )
}
