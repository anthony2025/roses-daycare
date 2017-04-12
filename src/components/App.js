import React, { Component } from 'react'
import styles from 'styles/App.css'
import Header from 'components/Header.js'
import Content from 'components/Content.js'
import Footer from 'components/Footer.js'

export default class App extends Component {
  render () {
    return (
      <div class={styles.app}>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}
