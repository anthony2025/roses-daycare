import React from 'react'
import styles from 'styles/Navbar.css'

export default props => (
  <div class={styles.navbar + " " + props.parentStyles}>
    <a class={styles.activeItem}>Home</a>
    <a class={styles.item}>About</a>
    <a class={styles.item}>Gallery</a>
    <a class={styles.item}>Blog</a>
    <a class={styles.item}>Contact</a>
  </div>
)

// activeClassName='active'
