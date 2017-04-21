import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.css'

import Navbar from 'src/Navbar'

export default ({className}) => (
  <div className={styles.header + ' ' + className}>
    <Link to='/' className={styles.title}>
      <div className={styles.smallTitle}>Rose's</div>
      <div className={styles.largeTitle}>Daycare</div>
    </Link>
    <Navbar className={styles.navbar} />
  </div>
)
