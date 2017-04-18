import React, {Component} from 'react'
import styles from 'styles/App.css'
import {BrowserRouter as Router} from 'react-router-dom'

import Header from 'components/Header.js'
import Content from 'containers/Content.js'
import Footer from 'components/Footer.js'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div class={styles.app}>
          <Header parentStyles={styles.header}/>
          <Content />
          <Footer parentStyles={styles.footer}/>
        </div>
      </Router>
    )
  }
}
