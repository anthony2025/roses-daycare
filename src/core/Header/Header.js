import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.css'
import {Link} from 'react-router-dom'

import Logo from 'src/core/Logo'
import Navbar from 'src/core/Navbar'

Header.propTypes = {
  className: PropTypes.string
}

export default function Header ({className}) {
  return (
    <div className={styles.header + ' ' + className}>
      <Link to='/' className={styles.title}>
        <Logo className={styles.logo} />
      </Link>
      <Navbar className={styles.navbar} />
    </div>
  )
}
