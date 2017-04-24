import React from 'react'
import styles from './ViewCard.css'

import Title from 'components/Title'

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
    <div className={styles.viewCard + ' ' + className}
      style={{backgroundColor: colors[bgColor]}}>
      <Title className={styles.title} title={title} subtitle={subtitle} />
      {children}
    </div>
  )
}
