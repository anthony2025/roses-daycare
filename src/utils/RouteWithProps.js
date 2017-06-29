import React from 'react'
import {Route} from 'react-router-dom'

export default ({component, ...props}) =>
  <Route
    {...props}
    render={innerProps =>
      React.createElement(component, {...props, ...innerProps})}
  />
