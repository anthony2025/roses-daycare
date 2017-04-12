import React, { Component } from 'react'
import styles from 'styles/Header.css'
import Navbar from 'components/Navbar.js'

export default class Header extends Component {
  render () {
    return (
      <div class={styles.header}>
        <div class={styles.title}>
            <div class={styles.smallTitle}>Rose's</div>
            <div class={styles.largeTitle}>Daycare</div>
        </div>
        <Navbar />
      </div>
    )
  }
}
