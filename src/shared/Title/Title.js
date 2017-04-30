import React from 'react'
import PropTypes from 'prop-types'
import styles from './Title.css'

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default function Title ({title, subtitle, className}) {
  return (
    <div className={styles.title + ' ' + className}>
      <div className={styles.bigTitle}>{title}</div>
      {(subtitle) &&
         <div className={styles.lineContainer}>
            <div className={styles.smallTitle}>{subtitle}</div>
          </div>
      }
    </div>
  )
}
