import React from 'react'
import styles from './NoMatch.css'

export default function NoMatch ({location}) {
  return (
    <div className={styles.noMatch}>
      <div className={styles.title}>
        No match for <code>{location.pathname}</code>
      </div>
      <img className={styles.image} src='/img/404.jpg' />
    </div>
  )
}
