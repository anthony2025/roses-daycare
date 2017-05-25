import React, {Component} from 'react'
import styles from './Home.css'

import getContent from 'src/services/getFromFirebase'

import Carousel from './Carousel/Carousel'
import Card from './Card/Card'

export default class Home extends Component {
  IMAGES = [
    'stock/img1.jpg',
    'stock/img2.jpg',
    'stock/img3.jpg',
    'stock/img4.jpg',
    'stock/img5.jpg',
    'stock/img6.jpg'
  ]

  state = {
    pages: []
  }

  componentDidMount () {
    const contentUrl = 'https://roses-daycare.firebaseio.com/data/pages.json'
    getContent(contentUrl, (data) => {
      this.setState({
        pages: data
      })
    })
  }

  render () {
    return (
      <div className={styles.home}>
        <Carousel
          className={styles.carousel}
          images={this.IMAGES}
        />

        <div className={styles.cards}>
          {this.state.pages.map(card => (
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
}
