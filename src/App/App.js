import React, {Component} from 'react'
import styles from './App.css'
import {BrowserRouter as Router} from 'react-router-dom'

import Header from 'src/Header'
import Content from 'src/Content'
import Footer from 'src/Footer'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div class={styles.app}>
          <Header parentStyles={styles.header} />
          <Content />
          <Footer parentStyles={styles.footer} />
        </div>
      </Router>
    )
  }
}
