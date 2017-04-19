import React, {Component} from 'react'
import styles from './About.css'

import Title from 'src/Title'

export default props => (
  <div class={styles.about}>
    <Title parentStyles={styles.title} bigTitle='About Us' smallTitle='OUR STORY' />
    <div class={styles.paragraph}>Periscope was founded on the belief that live video is a powerful source of truth and connects us in an authentic way with the world around us. We are fascinated by the idea of discovering the world through someone else’s eyes. What’s it like to see through the eyes of a protester in Ukraine? Or watch the sunrise from a hot air balloon in Cappadocia?</div>
    <div class={styles.paragraph}>While there are many ways to discover events, movements and places, we realized there is no better way to experience something than through live video. A picture may be worth a thousand words, but live video lets us explore the world together.</div>
  </div>
)
