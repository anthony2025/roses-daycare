import React from 'react'
import styles from './NoMatch.css'

export default ({location}) => (
  <div>
    <div class={styles.title}>
      No match for <code>{location.pathname}</code>
    </div>
    <img src='/img/404.jpg' />
  </div>
)
