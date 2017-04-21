import React from 'react'
import styles from './Home.css'

import Carousel from 'src/Carousel'
import Cards from 'src/Cards'

export default ({className}) => (
  <div className={styles.home + ' ' + className}>
    <Carousel speed={1000} height='400px'>
      <img src='/img/6img.jpg' />
      <img src='/img/4img.jpg' />
      <img src='/img/7img.jpg' />
    </Carousel>
    <Cards className={styles.cards} />
  </div>
)
