import React from 'react'
import styles from './About.css'

import getContent from 'src/services/getFromFirebase'

import Title from 'src/core/Title/Title'
import Avatar from 'src/core/Avatar/Avatar'

const people = [
  {
    name: 'Shirley Sanchez',
    subtitle: 'Principal',
    img: require('assets/avatar/shirley.jpg')
  },
  {
    name: 'Fabiola Pacheco',
    subtitle: 'Lead Teacher',
    img: require('assets/avatar/fabiola.jpg')
  },
  {
    name: 'Carolina Bau',
    subtitle: 'Teacher',
    img: require('assets/avatar/carolina.jpg')
  },
  {
    name: 'Anthony Ascencio',
    subtitle: 'Marketing',
    img: require('assets/avatar/anthony.jpg')
  }
]

export default function About () {
  return (
    <div className={styles.about}>
      <Title title='About Us' subtitle='OUR STORY' className={styles.title} />
      <div className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className={styles.avatars}>
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
    </div>
  )
}
