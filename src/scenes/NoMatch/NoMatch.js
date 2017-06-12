import React from 'react'
import PropTypes from 'prop-types'
import styles from './NoMatch.css'

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
}

export default function NoMatch (props) {
  return (
    <div className={styles.noMatch}>
      <div className={styles.title}>
        No match for <code>{props.location.pathname}</code>
      </div>
      <img className={styles.image} src={'404.jpg'} />
    </div>
  )
}
