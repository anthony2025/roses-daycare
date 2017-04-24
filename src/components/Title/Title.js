import React from 'react'
import styles from './Title.css'

export default function Title ({title, subtitle, className}) {
  return (
    <div className={styles.title + ' ' + className}>
      <div className={styles.bigTitle}>{title}</div>
      <div className={styles.lineContainer}>
        <div className={styles.smallTitle}>{subtitle}</div>
      </div>
    </div>
  )
}
