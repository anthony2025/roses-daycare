import React from 'react'
import PropTypes from 'prop-types'
import styles from './NoMatch.css'

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }),
  className: PropTypes.string
}

export default function NoMatch ({location, className}) {
  return (
    <div className={styles.noMatch + ' ' + className}>
      <div className={styles.title}>
        No match for <code>{location.pathname}</code>
      </div>
      <img className={styles.image} src='/img/404.jpg' />
    </div>
  )
}
