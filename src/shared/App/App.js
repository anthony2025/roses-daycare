import React, {Component} from 'react'
import styles from './App.css'
import {BrowserRouter} from 'react-router-dom'

import GithubCorner from 'src/shared/GithubCorner'
import Header from 'src/shared/Header'
import Content from 'src/shared/Content'
import Footer from 'src/shared/Footer'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <GithubCorner repository='https://github.com/anthony2025/roses-daycare' />
          <Header className={styles.header} />
          <Content className={styles.content} />
          <Footer className={styles.footer} />
        </div>
      </BrowserRouter>
    )
  }
}
