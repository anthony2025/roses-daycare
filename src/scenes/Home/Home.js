import React from 'react'
import styles from './Home.css'

import PAGES from 'src/content/pages.json'
import IMAGES from 'src/content/images.json'

import Carousel from './Carousel/Carousel'
import Card from './Card/Card'

export default function Home() {
  return (
    <div className={styles.home}>
      <Carousel images={IMAGES} />

      <div className={styles.cards}>
        {PAGES.map(page =>
          <Card
            key={page.title}
            title={page.title}
            text={page.text}
            link={page.path}
          />
        )}
      </div>
    </div>
  )
}
