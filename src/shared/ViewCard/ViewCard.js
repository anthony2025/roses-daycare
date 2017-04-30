// ViewCard is HOC that adds padding, bgColor, and a title
// to helps us maintain a consistent look inside Content

import React from 'react'
import PropTypes from 'prop-types'
import styles from './ViewCard.css'

import Title from 'src/shared/Title'

ViewCard.propTypes = {
  children: PropTypes.node.isRequired,
  bgColor: PropTypes.string.isRequired,
}

const colors = {
  blue: '#79B9D9',
  pink: '#FEBCBD',
  red: '#FD8384',
  green: '#9ED2A6'
}

export default function ViewCard ({
  children,
  bgColor,
  title,
  subtitle,
  className}) {
  return (
    // Do not allow styling from outside
    <div className={styles.viewCard}
      style={{backgroundColor: colors[bgColor]}}>
      <Title className={styles.title} title={title} subtitle={subtitle} />
      {children}
    </div>
  )
}
