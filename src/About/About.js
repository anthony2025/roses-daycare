import React from 'react'
import styles from './About.css'

import ViewCard from 'src/shared/ViewCard'
import Avatar from './Avatar'

const people = [
  {
    name: 'Shirley Sanchez',
    subtitle:'Principal',
    img:'img/shirley.jpg'
  },
  {
    name:'Fabiola Pacheco',
    subtitle:'Lead Teacher',
    img:'img/fabiola.jpg'
  },
  {
    name:'Carolina Bau',
    subtitle:'Teacher',
    img:'img/carolina.jpg'
  },
  {
    name:'Anthony Ascencio',
    subtitle:'Marketing',
    img:'img/anthony.jpg'
  }
]

export default function About ({className}) {
  return (
    <ViewCard
      bgColor='red'
      title='About Us'
      subtitle='OUR STORY'
    >
      <div className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className={styles.avatarGallery}>
        {people.map(person => (
          <Avatar
            className={styles.avatar}
            img={person.img}
            name={person.name}
            subtitle={person.subtitle}
            key={person.name}
          />
        ))}
      </div>
    </ViewCard>
  )
}
