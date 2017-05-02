import React from 'react'
import PropTypes from 'prop-types'
import styles from './Logo.css'

Logo.propTypes = {
  className: PropTypes.string
}

export default function Logo ({className}) {
  return (
    <div className={styles.logo + ' ' + className}>
      <div className={styles.smallTitle}>Rose's</div>
      <div className={styles.bigTitle}>Daycare</div>
    </div>
  )
}
