import React, {Component} from 'react'
import styles from './Gallery.css'

import Title from 'src/core/Title/Title'
import Modal from './Modal/Modal'

export default class Gallery extends Component {
  images = [
    require('assets/stock/img1.jpg'),
    require('assets/stock/img2.jpg'),
    require('assets/stock/img3.jpg'),
    require('assets/stock/img4.jpg'),
    require('assets/stock/img5.jpg'),
    require('assets/stock/img6.jpg'),
  ]

  static propTypes = {
    // none
  }

  state = {
    previewImage: "/img/1img.jpg",
    isModalOpen: false
  }

  handleOpenModal = (event) => this.setState({isModalOpen: true, previewImage: event.target.src})
  handleCloseModal = () => this.setState({isModalOpen: false})

  render () {
    return (
      <div className={styles.gallery}>
        <Title title='Photos &amp; Videos' subtitle='COME PEEK INSIDE' />

        <div className={styles.images}>
          {this.images.map((image) => (
            <img
              className={styles.image}
              key={image}
              src={image}
              onClick={this.handleOpenModal}
            />
          ))}
          {this.images.map((image) => (
            <img
              className={styles.image}
              key={image}
              src={image}
              onClick={this.handleOpenModal}
            />
          ))}
        </div>

        <Modal
          isModalOpen={this.state.isModalOpen}
          handleCloseModal={this.handleCloseModal}
          previewImage={this.state.previewImage}
        />
      </div>
    )
  }
}
