import React from 'react'
import styles from './Article.css'

export default function Article ({title, image, text, className}) {
  return (
    <div className={styles.article + ' ' + className}>
      <div className={styles.title}>{title}</div>
      <img className={styles.image} src={image} />
      <div className={styles.paragraph}>{text}</div>
    </div>
  )
}
