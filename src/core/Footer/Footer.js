import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.css'

Footer.propTypes = {
  className: PropTypes.string
}

const link = 'https://github.com/anthony2025/roses-daycare'

export default function Footer ({className}) {
  return (
    <div className={styles.footer + ' ' + className}>
      <a href={link} className={styles.text}>
        Rose's Day Care LLC, 2017
        <br />
        made with ♥ by Anthony Ascencio
      </a>
    </div>
  )
}
