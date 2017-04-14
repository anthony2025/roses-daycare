import React from 'react'
import styles from 'styles/Header.css'

import Navbar from 'components/Navbar.js'

export default props => (
  <div class={styles.header  + " " + props.parentStyles}>
    <div class={styles.title}>
      <div class={styles.smallTitle}>Rose's</div>
      <div class={styles.largeTitle}>Daycare</div>
    </div>
    <Navbar parentStyles={styles.navbar}/>
  </div>
)
