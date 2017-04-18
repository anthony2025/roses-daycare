import React, {Component} from 'react'
import styles from 'styles/Content.css'
import {Route} from 'react-router-dom'

import Home from 'views/Home.js'
import Contact from 'views/Contact.js'

export default class Content extends Component {
  render () {
    return (
      <div class={styles.content}>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
      </div>
    )
  }
}
