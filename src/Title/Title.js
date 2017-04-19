import React, {Component} from 'react'
import styles from './Title.css'

export default ({bigTitle, smallTitle, parentStyles}) => (
  <div class={styles.title + ' ' + parentStyles}>
    <div class={styles.bigTitle}>{bigTitle}</div>
    <div class={styles.smallTitle}>{smallTitle}</div>
  </div>
)
