import React from 'react'
import PropTypes from 'prop-types'
import styles from './Footer.css'

import {REPOSITORY} from 'src/utils/constants'

Footer.propTypes = {
  className: PropTypes.string
}

export default function Footer ({className}) {
  return (
    <div className={styles.footer + ' ' + className}>
      <a href={REPOSITORY} className={styles.text}>
        Rose's Day Care LLC, 2017
        <br />
        made with ♥ by Anthony Ascencio
      </a>
    </div>
  )
}
