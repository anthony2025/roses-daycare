import React, {Component} from 'react'
import styles from './News.css'

import ViewCard from 'containers/ViewCard'

export default class News extends Component {
  render () {
    return (
      <ViewCard bgColor='red' title='Weekly Stories' subtitle='WHAT WE ARE UP TO'>
        <div className={styles.article}>
          <div className={styles.header}>Making Homemade Clay</div>
          <img className={styles.photo} src='img/6img.jpg' />
          <div className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className={styles.article}>
          <div className={styles.header}>Hopscotch Championship</div>
          <img className={styles.photo} src='img/4img.jpg' />
          <div className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
        </div>
        <div className={styles.link}>Our own blog will be coming soon.</div>
      </ViewCard>
    )
  }
}
