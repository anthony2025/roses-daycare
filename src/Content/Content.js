import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import styles from './Content.css'

import Home from 'src/Home'
import Contact from 'src/Contact'

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
