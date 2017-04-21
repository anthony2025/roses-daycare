import React, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'
import styles from './Content.css'

import Home from 'src/Home'
import About from 'src/About'
import Gallery from 'src/Gallery'
import Blog from 'src/Blog'
import Contact from 'src/Contact'
import NoMatch from 'src/NoMatch'

export default class Content extends Component {
  render () {
    return (
      <div className={styles.content}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/gallery' component={Gallery} />
          {/*<Route path='/blog' component={Blog} />*/}
          <Route path='/contact' component={Contact} />
          <Route component={NoMatch}/>
        </Switch>
      </div>
    )
  }
}
