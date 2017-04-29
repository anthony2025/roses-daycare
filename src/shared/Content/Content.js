import React, {Component} from 'react'
import styles from './Content.css'
import {Switch, Route} from 'react-router-dom'

import Home from 'src/Home'
import About from 'src/About'
import Gallery from 'src/Gallery'
import News from 'src/News'
import Contact from 'src/Contact'
import NoMatch from 'src/NoMatch'

export default class Content extends Component {
  render () {
    return (
      <div className={styles.content + ' ' + this.props.className}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/news' component={News} />
          <Route path='/contact' component={Contact} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
