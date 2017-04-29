import React from 'react'
import styles from './Avatar.css'

export default function Avatar ({img, name, subtitle, className}) {
  return (
    <div className={styles.avatar + ' ' + className}>
      <img className={styles.image} src={img} />
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.subtitle}>
        {subtitle}
      </div>
    </div>
  )
}
