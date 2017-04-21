import React, {Component} from 'react'
import styles from './Title.css'

export default ({bigTitle, smallTitle, className}) => (
  <div className={styles.title + ' ' + className}>
    <div className={styles.bigTitle}>{bigTitle}</div>
    <div className={styles.lineContainer}>
      <div className={styles.smallTitle}>{smallTitle}</div>
    </div>
  </div>
)
