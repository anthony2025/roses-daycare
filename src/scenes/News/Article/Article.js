import React from 'react'
import PropTypes from 'prop-types'
import styles from './Article.css'

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default function Article ({
  title,
  image,
  text,
  className}) {
  return (
    <div className={styles.article + ' ' + className}>
      <div className={styles.title}>{title}</div>
      <img className={styles.image} src={image} />
      <div className={styles.paragraph}>{text}</div>
    </div>
  )
}
