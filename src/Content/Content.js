import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import styles from './Content.css'

import Home from 'src/Home'
import Contact from 'src/Contact'
import NoMatch from 'src/NoMatch'

export default class Content extends Component {
  render () {
    return (
      <div class={styles.content}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
