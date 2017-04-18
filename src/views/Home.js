import React from 'react'
import styles from 'styles/Home.css'
import {Link} from 'react-router-dom'

import Carousel from 'components/Carousel.js'
import Cards from 'components/Cards.js'

export default props => (
  <div class={styles.home  + " " + props.parentStyles}>
    <Carousel parentStyles={styles.carousel}/>
    <Cards parentStyles={styles.cards}/>
  </div>
)
