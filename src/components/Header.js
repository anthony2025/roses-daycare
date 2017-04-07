import React, { Component } from 'react'
import styles from 'styles/Header.css'

export default class Header extends Component {
  render () {
    return (
      <div className={styles.header}>
        <h1 className={styles.title}>Browse</h1>
      </div>
    )
  }
}
