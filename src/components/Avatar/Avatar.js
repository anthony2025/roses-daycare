import React from 'react'
import PropTypes from 'prop-types'
import styles from './Avatar.css'

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
}

export default function Avatar (props) {
  return (
    <div className={styles.avatar}>
      <img className={styles.image} src={props.img} />
      <div className={styles.name}>
        {props.name}
      </div>
      <div className={styles.subtitle}>
        {props.subtitle}
      </div>
    </div>
  )
}
