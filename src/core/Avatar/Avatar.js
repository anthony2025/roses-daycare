import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.css'

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  className: PropTypes.string
}

export default function Avatar ({img, name, subtitle, className}) {
  return (
    <div className={styles.avatar + ' ' + className}>
      <img className={styles.image} src={img} />
      <div className={styles.name}>
        {name}
      </div>
      <div className={styles.subtitle}>
        {subtitle}
      </div>
    </div>
  )
}
