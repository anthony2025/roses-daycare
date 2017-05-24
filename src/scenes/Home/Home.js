import React from 'react'
import styles from './Home.css'

import Carousel from './Carousel/Carousel'
import Card from './Card/Card'

const cards = [
  {
    link: '/about',
    title: 'About Us',
    text: 'Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.'
  },
  {
    link: '/gallery',
    title: 'Gallery',
    text: 'Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.'
  },
  {
    link: '/news',
    title: 'News',
    text: 'Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.'
  },
  {
    link: '/contact',
    title: 'Contact Us',
    text: 'Hi! We are still working on this webpage, please do come back in a couple of weeks when we have everything running beautifully.'
  }
]

const images = [
  require('assets/stock/img1.jpg'),
  require('assets/stock/img2.jpg'),
  require('assets/stock/img3.jpg'),
  require('assets/stock/img4.jpg'),
  require('assets/stock/img5.jpg'),
  require('assets/stock/img6.jpg')
]

export default function Home () {
  return (
    <div className={styles.home}>
      <Carousel
        className={styles.carousel}
        images={images}
      />

      <div className={styles.cards}>
        {cards.map(card => (
          <Card
            className={styles.card}
            key={card.title}
            title={card.title}
            text={card.text}
            link={card.link}
          />
        ))}
      </div>
    </div>
  )
}
