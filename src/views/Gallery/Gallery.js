import React, {Component} from 'react'
import styles from './Gallery.css'

import ViewCard from 'containers/ViewCard'

export default function Gallery ({className}) {
  const urls = [
    '/img/1img.jpg',
    '/img/2img.jpg',
    '/img/3img.jpg',
    '/img/4img.jpg',
    '/img/5img.jpg',
    '/img/6img.jpg'
  ]

  return (
    <ViewCard bgColor='blue' title='Photos &amp; Videos' subtitle='COME PEEK INSIDE'>
      <div className={styles.images}>
        {urls.map((url, index) =>
          <div className={styles.image} key={index}><img src={url} /></div>)}
        {urls.map((url, index) =>
          <div className={styles.image} key={index}><img src={url} /></div>)}
      </div>
    </ViewCard>
  )
}
