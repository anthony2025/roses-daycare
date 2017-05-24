import React from 'react'
import PropTypes from 'prop-types'

import {Switch, Route} from 'react-router-dom'

import Home from 'src/scenes/Home/Home'
import About from 'src/scenes/About/About'
import Gallery from 'src/scenes/Gallery/Gallery'
import News from 'src/scenes/News/News'
import Contact from 'src/scenes/Contact/Contact'
import NoMatch from 'src/scenes/NoMatch/NoMatch'

MainSection.propTypes = {
  className: PropTypes.string
}

// Because children control their own background color and padding
// allowing styling in the parent adds more complexity than it solves
export default function MainSection ({className}) {
  return (
    <div className={className}>
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
