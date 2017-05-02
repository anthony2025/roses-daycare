import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.css'

import {Link} from 'react-router-dom'

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
  className: PropTypes.string
}

export default function Card ({
  title,
  text,
  link,
  className}) {
  return (
    <Link to={link} className={styles.card + ' ' + className}>
      <div className={styles.title}>{title}</div>
      <div className={styles.text}>{text}</div>
      <div className={styles.readMore}>Read more</div>
    </Link>
  )
}
