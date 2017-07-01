// Note to self: don't try to make the routes dynamic, Webpack needs the explicitness
import React from 'react'

import {Switch, Route} from 'react-router-dom'
import Loadable from 'react-loadable'
import Loading from 'utils/Loading'

export default function Routes(props) {
  return (
    <Switch>
      <Route
        exact={true}
        path="/"
        component={Loadable({
          loader: () => import('containers/Home'),
          loading: Loading
        })}
      />
      <Route
        path="/news"
        component={Loadable({
          loader: () => import('containers/News'),
          loading: Loading
        })}
      />
      <Route
        path="/gallery"
        component={Loadable({
          loader: () => import('containers/Gallery'),
          loading: Loading
        })}
      />
      <Route
        path="/contact"
        component={Loadable({
          loader: () => import('containers/Contact'),
          loading: Loading
        })}
      />
      <Route
        component={Loadable({
          loader: () => import('containers/NoMatch'),
          loading: Loading
        })}
      />
    </Switch>
  )
}
