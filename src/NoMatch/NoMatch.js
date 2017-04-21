import React from 'react'
import styles from './NoMatch.css'

export default ({location}) => (
  <div>
    <div className={styles.title}>
      No match for <code>{location.pathname}</code>
    </div>
    <img className={styles.image} src='/img/404.jpg' />
  </div>
)
