import React, {Component} from 'react'
import styles from './App.css'
import {BrowserRouter} from 'react-router-dom'

import Header from 'src/Header'
import Content from 'src/Content'
import Footer from 'src/Footer'

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <Header className={styles.header} />
          <Content />
          <Footer className={styles.footer} />
        </div>
      </BrowserRouter>
    )
  }
}
