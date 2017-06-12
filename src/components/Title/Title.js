import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.css'

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default function Title (props) {
  return (
    <div className={styles.title}>
      <div className={styles.bigTitle}>{props.title}</div>
      <div className={styles.lineContainer}>
        <div className={styles.smallTitle}>{props.subtitle}</div>
      </div>
    </div>
  )
}
