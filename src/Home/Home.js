import React from 'react'
import styles from './Home.css'

import Carousel from 'src/Carousel'
import Cards from 'src/Cards'

export default props => (
  <div class={styles.home + ' ' + props.parentStyles}>
    <Carousel speed={2000} height='400px'>
      <img src='/img/6img.jpg' />
      <img src='/img/4img.jpg' />
      <img src='/img/7img.jpg' />
    </Carousel>
    <Cards parentStyles={styles.cards} />
  </div>
)
