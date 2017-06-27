import React from 'react'
import PropTypes from 'prop-types'

import {Switch, Route} from 'react-router-dom'

import Home from 'containers/Home'
import Contact from 'containers/Contact'
import Gallery from 'containers/Gallery'
import News from 'containers/News'
import NoMatch from 'containers/NoMatch'

MainSection.propTypes = {
  pages: PropTypes.objectOf(
    PropTypes.shape({
      exact: PropTypes.bool,
      path: PropTypes.string
    })
  )
}

const getComponent = key =>
  ({
    home: Home,
    contact: Contact,
    gallery: Gallery,
    news: News,
    noMatch: NoMatch
  }[key])

export default function MainSection(props) {
  const pages = {...props.pages}
  return (
    <Switch>
      {Object.keys(pages).map(key =>
        <Route
          exact={pages[key].exact}
          key={key}
          path={pages[key].path}
          component={getComponent(key)}
        />
      )}
    </Switch>
  )
}
