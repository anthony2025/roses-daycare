import React from 'react'

import {Switch, Route} from 'react-router-dom'

import Home from 'src/scenes/Home/Home'
import About from 'src/scenes/About/About'
import Gallery from 'src/scenes/Gallery/Gallery'
import News from 'src/scenes/News/News'
import Contact from 'src/scenes/Contact/Contact'
import NoMatch from 'src/scenes/NoMatch/NoMatch'

// Note to self: Because of the theming limitations of css-modules
// converting this into an HOC adds more complexity than it solves
export default function MainSection() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  )
}
