import React from 'react'
import PropTypes from 'prop-types'
import styles from './Article.css'

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string.isRequired
}

export default function Article (props) {
  return (
    <div className={styles.article}>
      <div className={styles.title}>{props.title}</div>
      <img className={styles.image} src={props.image} />
      <div className={styles.paragraph}>{props.text}</div>
    </div>
  )
}
