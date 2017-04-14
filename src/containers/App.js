import React, { Component } from 'react'
import styles from 'styles/App.css'

import Header from 'components/Header.js'
import Content from 'containers/Content.js'
import Footer from 'components/Footer.js'

export default class App extends Component {
  render () {
    return (
      <div class={styles.app + " " + this.props.parentStyles}>
        <Header parentStyles={styles.header}/>
        <Content parentStyles={styles.content}/>
        <Footer parentStyles={styles.footer}/>
      </div>
    )
  }
}
