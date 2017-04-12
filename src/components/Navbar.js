import React, { Component } from 'react'
import styles from 'styles/Navbar.css'

export default class Navbar extends Component {
  render () {
    return (
      <div class={styles.navbar}>
        <a class={styles.activeItem}>Home</a>
        <a class={styles.item}>About</a>
        <a class={styles.item}>Gallery</a>
        <a class={styles.item}>Blog</a>
        <a class={styles.item}>Contact</a>
      </div>
    )
  }
}

// activeClassName='active'
