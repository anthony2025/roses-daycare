import React from 'react'

import pages from 'content/pages.json'
import {Switch, Route} from 'react-router-dom'

import Home from 'scenes/Home/Home'
import About from 'scenes/About/About'
import Gallery from 'scenes/Gallery/Gallery'
import News from 'scenes/News/News'
import Contact from 'scenes/Contact/Contact'
import NoMatch from 'scenes/NoMatch/NoMatch'

const getComponentByKey = key =>
  ({
    home: Home,
    about: About,
    gallery: Gallery,
    news: News,
    contact: Contact,
    noMatch: NoMatch
  }[key])

const RouteWithProps = ({component, ...props}) =>
  <Route
    {...props}
    render={innerProps =>
      React.createElement(component, {...props, ...innerProps})}
  />

export default function MainSection() {
  return (
    <div>
      <Switch>
        {Object.keys(pages).map(key =>
          <RouteWithProps
            exact={pages[key].exact}
            key={key}
            title={pages[key].longTitle.toUpperCase()}
            subtitle={pages[key].subtitle}
            path={pages[key].path}
            component={getComponentByKey(key)}
          />
        )}
      </Switch>
    </div>
  )
}
