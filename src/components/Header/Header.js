import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.css'

import Navbar from 'components/Navbar'

export default function Header ({className}) {
  return (
    <div className={styles.header + ' ' + className}>
      <Link to='/' className={styles.title}>
        <div className={styles.smallTitle}>Rose's</div>
        <div className={styles.bigTitle}>Daycare</div>
      </Link>
      <Navbar className={styles.navbar} />
    </div>
  )
}
