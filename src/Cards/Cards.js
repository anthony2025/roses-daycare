import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Cards.css'

export default props => (
  <div class={styles.cards + ' ' + props.parentStyles}>
    <div class={styles.card}>
      <div class={styles.subtitle}>About Us</div>
      <div class={styles.description}>Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.</div>
      <div class={styles.readMore}><Link to='/about'>Read more</Link></div>
    </div>
    <div class={styles.card}>
      <div class={styles.subtitle}>Gallery</div>
      <div class={styles.description}>Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.</div>
      <div class={styles.readMore}><Link to='/gallery'>Read more</Link></div>
    </div>
    <div class={styles.card}>
      <div class={styles.subtitle}>Blog</div>
      <div class={styles.description}>Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.</div>
      <div class={styles.readMore}><Link to='/blog'>Read more</Link></div>
    </div>
    <div class={styles.card}>
      <div class={styles.subtitle}>Contact Us</div>
      <div class={styles.description}>Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.</div>
      <div class={styles.readMore}><Link to='contact'>Read more</Link></div>
    </div>
  </div>
)
