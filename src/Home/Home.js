import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Home.css'

import Carousel from 'src/Carousel'
import Cards from 'src/Cards'

export default props => (
  <div class={styles.home + ' ' + props.parentStyles}>
    <Carousel speed={2000} style={{height: '350px'}}>
      <img style={{maxHeight: '350px'}} src='/img/6img.jpg' />
      <img style={{maxHeight: '350px'}} src='/img/4img.jpg' />
      <img style={{maxHeight: '350px'}} src='/img/7img.jpg' />
    </Carousel>
    <Cards parentStyles={styles.cards} />
  </div>
)
