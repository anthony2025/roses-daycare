import React from 'react'
import PropTypes from 'prop-types'

Loading.propTypes = {
  isLoading: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool
  // TODO find the right ones
}

export default function Loading(props) {
  if (props.isLoading) {
    // While our other component is loading...
    if (props.timedOut) {
      // In case we've timed out loading our other component.
      return <div>We know...this is taking so long to load...</div>
    } else if (props.pastDelay) {
      // Display a loading screen after a set delay.
      return <div>Loading!...</div>
    } else {
      // Don't flash "Loading..." when we don't need to.
      return null
    }
  } else if (props.error) {
    // If we aren't loading, refresh the page
    return window.location.reload()
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    return null
  }
}
