import React from 'react'
import styles from './Home.css'

import Carousel from './Carousel'
import Cards from './Cards'

export default function Home ({className}) {
  const urls = [
    '/img/1img.jpg',
    '/img/2img.jpg',
    '/img/3img.jpg',
    '/img/4img.jpg',
    '/img/5img.jpg',
    '/img/6img.jpg'
  ]

  return (
    <div className={styles.home + ' ' + className}>
      <Carousel height='400px'>
        {urls.map((url, index) => <img src={url} key={index} />)}
      </Carousel>
      <Cards className={styles.cards} />
    </div>
  )
}
