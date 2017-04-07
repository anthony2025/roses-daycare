import React, { Component } from 'react'
import styles from 'styles/App.css'
import Header from 'components/Header.js'
import Sidebar from 'components/Sidebar.js'
import Content from 'components/Content.js'

export default class App extends Component {
  render () {
    return (
      <div className={styles.wrapper}>
        <Header className={styles.header} />
        <Content className={styles.content} />
        <Sidebar className={styles.sidebar} />
      </div>
    )
  }
}
