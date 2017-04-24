import React from 'react'
import styles from './About.css'

import ViewCard from 'containers/ViewCard'
import PeopleGallery from 'components/PeopleGallery'

export default function About ({className}) {
  return (
    <ViewCard bgColor='red' title='About Us' subtitle='OUR STORY'>
      <div className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <div className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      <PeopleGallery className={styles.peopleGallery}>
        <div name='Shirley Sanchez' position='Principal' img='img/shirley.jpg' />
        <div name='Fabiola Pacheco' position='Lead Teacher' img='img/fabiola.jpg' />
        <div name='Carolina Bau' position='Teacher' img='img/carolina.jpg' />
        <div name='Anthony Ascencio' position='Marketing' img='img/anthony.jpg' />
      </PeopleGallery>
    </ViewCard>
  )
}
