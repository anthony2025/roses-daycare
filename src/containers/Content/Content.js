import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import styles from './Content.css'

import Home from 'views/Home'
import About from 'views/About'
import Gallery from 'views/Gallery'
import Blog from 'views/Blog'
import Contact from 'views/Contact'
import NoMatch from 'views/NoMatch'

export default class Content extends Component {
  render () {
    return (
      <div className={styles.content}>
        <Switch>
          <Route className={styles.child} exact path='/' component={Home} />
          <Route className={styles.child}path='/about' component={About} />
          <Route className={styles.child}path='/gallery' component={Gallery} />
          <Route className={styles.child}path='/blog' component={Blog} />
          <Route className={styles.child}path='/contact' component={Contact} />
          <Route className={styles.child}component={NoMatch} />
        </Switch>
      </div>
    )
  }
}
