import React, { Component } from 'react'
import styles from 'styles/Sidebar.css'

export default class Sidebar extends Component {
  render () {
    return (
      <div className={styles.sidebar}>
        <div className={`${styles.icon} ${styles.logo}`}>
          <img src='icons/logo.png' alt='logo-icon' />
        </div>
        <div className={`${styles.icon} ${styles.search}`}>
          <img src='icons/search.png' alt='search-icon' />
          <label>Search</label>
        </div>
        <div className={`${styles.icon} ${styles.browse}`}>
          <img src='icons/browse.png' alt='browse-icon' />
          <label>Browse</label>
        </div>
        <div className={`${styles.icon} ${styles.radio}`}>
          <img src='icons/radio.png' alt='radio-icon' />
          <label>Radio</label>
        </div>
        <div className={`${styles.icon} ${styles.music}`}>
          <img src='icons/music.png' alt='music-icon' />
          <label> Music</label>
        </div>
        <div className={`${styles.icon} ${styles.follow}`}>
          <img src='icons/follow.png' alt='follow-icon' />
          <label>Follow</label>
        </div>
        <div className={`${styles.icon} ${styles.profile}`}>
          <img src='icons/profile.jpg' alt='profile-icon' />
          <label>Cesar</label>
        </div>
        <div className={`${styles.icon} ${styles.settings}`}>
          <img src='icons/settings.png' alt='settings-icon' />
        </div>
      </div>
    )
  }
}
