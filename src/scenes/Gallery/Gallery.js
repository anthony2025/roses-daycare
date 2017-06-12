import React, {Component} from 'react'
import styles from './Gallery.css'

import IMAGES from 'src/content/images'
import {generate as id} from 'shortid'

import Title from 'src/components/Title/Title'
import Modal from './Modal/Modal'

export default class Gallery extends Component {
  state = {
    previewImage: IMAGES[0],
    isModalOpen: false
  }

  handleOpenModal = event =>
    this.setState({isModalOpen: true, previewImage: event.target.src})
  handleCloseModal = () => this.setState({isModalOpen: false})

  render() {
    return (
      <div className={styles.gallery}>
        <Title title="Photos &amp; Videos" subtitle="COME PEEK INSIDE" />

        <div className={styles.images}>
          {IMAGES.map(image =>
            <img
              className={styles.image}
              key={id()}
              src={image}
              onClick={this.handleOpenModal}
            />
          )}
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
