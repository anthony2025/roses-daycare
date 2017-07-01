import React from 'react'

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
    // If we aren't loading, maybe
    return <div>Sorry, the page failed to load</div>
  } else {
    // This case shouldn't happen... but we'll return null anyways.
    return null
  }
}
