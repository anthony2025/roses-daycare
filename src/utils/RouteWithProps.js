import React from 'react'
import {Route} from 'react-router-dom'

const RouteWithProps = ({component, ...props}) =>
  <Route
    {...props}
    render={innerProps =>
      React.createElement(component, {...props, ...innerProps})}
  />

export default RouteWithProps
