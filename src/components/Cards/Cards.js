import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Cards.css'

export default function Cards ({className}) {
  return (
    <div className={styles.cards + ' ' + className}>
      <Link to='/about' className={styles.card}>
        <div className={styles.subtitle}>About Us</div>
        <div className={styles.description}>Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.</div>
        <div className={styles.readMore}>Read more</div>
      </Link>
      <Link to='/gallery' className={styles.card}>
        <div className={styles.subtitle}>Gallery</div>
        <div className={styles.description}>Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.</div>
        <div className={styles.readMore}>Read more</div>
      </Link>
      <Link to='/news' className={styles.card}>
        <div className={styles.subtitle}>News</div>
        <div className={styles.description}>Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.</div>
        <div className={styles.readMore}>Read more</div>
      </Link>
      <Link to='/contact' className={styles.card}>
        <div className={styles.subtitle}>Contact Us</div>
        <div className={styles.description}>Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.</div>
        <div className={styles.readMore}>Read more</div>
      </Link>
    </div>
  )
}
