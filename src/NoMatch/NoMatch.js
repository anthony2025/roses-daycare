import React from 'react'
import styles from './NoMatch.css'

export default ({location}) => (
  <div class={styles.noMatch}>
    <img class={styles.image} src='/img/404.jpg' />
    <div class={styles.text}>
      No match for <code>{location.pathname}</code>
    </div>
  </div>
)
