import React from 'react'
import PropTypes from 'prop-types'
import styles from './Card.css'

import {Link} from 'react-router-dom'

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
}

export default function Card (props) {
  return (
    <Link to={props.link} className={styles.card}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.text}>{props.text}</div>
      <div className={styles.readMore}>Read more</div>
    </Link>
  )
}
