import React from 'react'
import styles from './PeopleGallery.css'

export default function PeopleGallery ({className, children}) {
  return (
    <div className={styles.peopleGallery + ' ' + className}>
      {React.Children.map(children, child => (
        <div className={styles.person}>
          <img className={styles.photo} src={child.props.img} />
          <div className={styles.name}>{child.props.name}</div>
          <div className={styles.position}>{child.props.position}</div>
        </div>))}
    </div>
  )
}
