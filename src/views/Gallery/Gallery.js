import React, {Component} from 'react'
import styles from './Gallery.css'

import ViewCard from 'containers/ViewCard'

export default class Gallery extends Component {
  state = {
    preview: "/img/1img.jpg"
  }

  urls = [
    '/img/1img.jpg',
    '/img/2img.jpg',
    '/img/3img.jpg',
    '/img/4img.jpg',
    '/img/5img.jpg',
    '/img/6img.jpg'
  ]

  changePreview = (event) => {
    this.setState({preview: event.target.src})
  }

  render () {
    return (
      <ViewCard bgColor='blue' title='Photos &amp; Videos' subtitle='COME PEEK INSIDE'>
        <div className={styles.gallery}>
          <img className={styles.preview} src={this.state.preview} />
          <div className={styles.images}>
            {this.urls.map((url, index) =>
              <div className={styles.image} key={index}><img src={url} onClick={this.changePreview}/></div>)}
            {this.urls.map((url, index) =>
              <div className={styles.image} key={index}><img src={url} onClick={this.changePreview}/></div>)}
          </div>
        </div>
      </ViewCard>
    )
  }
}
