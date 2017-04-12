import React, { Component } from 'react'
import styles from 'styles/Content.css'
import Carrousel from 'components/Carrousel.js'

export default class Content extends Component {
  render () {
    return (
      <div class={styles.content}>
        <Carrousel />
        <div class={styles.boxes}>
          <div class={styles.firstBox}>
            <div class={styles.subtitle}>About Us</div>
            <div class={styles.description}>Hi! :) We are still working on this webpage, please please please do come back in a couple of weeks when we have everything running beautifully. Have a nice day!</div>
            <div class={styles.readMore}>Read more</div>
          </div>
          <div class={styles.secondBox}>
            <div class={styles.subtitle}>Reviews</div>
            <div class={styles.description}>Hi! :) We are still working on this webpage, please please please do come back in a couple of weeks when we have everything running beautifully. Have a nice day!</div>
            <div class={styles.readMore}>Read more</div>
          </div>
          <div class={styles.thirdBox}>
            <div class={styles.subtitle}>Rates</div>
            <div class={styles.description}>Hi! :) We are still working on this webpage, please please please do come back in a couple of weeks when we have everything running beautifully. Have a nice day!</div>
            <div class={styles.readMore}>Read more</div>
          </div>
          <div class={styles.fourthBox}>
            <div class={styles.subtitle}>Contact Us</div>
            <div class={styles.description}>Hi! :) We are still working on this webpage, please please please do come back in a couple of weeks when we have everything running beautifully. Have a nice day!</div>
            <div class={styles.readMore}>Read more</div>
          </div>
        </div>
      </div>
    )
  }
}
