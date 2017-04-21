import React, {Component} from 'react'
import styles from './Gallery.css'

import Title from 'src/Title'

export default ({className}) => (
  <div className={styles.gallery}>
    <Title className={styles.title} bigTitle='Photos & Videos' smallTitle='PEEK INSIDE' />
    <div className={styles.photos}>
      <div className={styles.photo} />
    </div>
  </div>
)
