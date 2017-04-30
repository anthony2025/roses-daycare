import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.css'

Footer.propTypes = {
  className: PropTypes.string
}

export default function Footer ({className}) {
  const webpage = 'https://github.com/anthony2025/roses-daycare'
  return (
    <div className={styles.footer + ' ' + className}>
      <a href={webpage} className={styles.text}>
        Rose's Day Care LLC, 2017
        <br />
        made with ♥ by Anthony Ascencio
      </a>
    </div>
  )
}
