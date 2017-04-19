import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.css'

import Navbar from 'src/Navbar'

export default props => (
  <div class={styles.header + ' ' + props.parentStyles}>
    <Link to='/' class={styles.title}>
      <div class={styles.smallTitle}>Rose's</div>
      <div class={styles.largeTitle}>Daycare</div>
    </Link>
    <Navbar parentStyles={styles.navbar} />
  </div>
)
