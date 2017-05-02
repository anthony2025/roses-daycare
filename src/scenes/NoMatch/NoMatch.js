import React from 'react'
import PropTypes from 'prop-types'
import styles from './NoMatch.css'

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default function NoMatch ({location}) {
  return (
    <div className={styles.noMatch}>
      <div className={styles.title}>
        No match for <code>{location.pathname}</code>
      </div>
      <img className={styles.image} src={require('assets/404.jpg')} />
    </div>
  )
}
