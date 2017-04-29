import React, {Component} from 'react'
import styles from './Gallery.css'

import ViewCard from 'src/shared/ViewCard'
import Modal from 'react-modal'

export default class Gallery extends Component {
  images = [
    '/img/1img.jpg',
    '/img/2img.jpg',
    '/img/3img.jpg',
    '/img/4img.jpg',
    '/img/5img.jpg',
    '/img/6img.jpg',
    '/img/1img.jpg',
    '/img/2img.jpg',
    '/img/3img.jpg',
    '/img/4img.jpg',
    '/img/5img.jpg',
    '/img/6img.jpg',
    '/img/1img.jpg',
    '/img/2img.jpg',
    '/img/3img.jpg',
    '/img/4img.jpg',
    '/img/5img.jpg',
    '/img/6img.jpg'
  ]

  state = {
    preview: "/img/1img.jpg",
    showModal: false
  }

  handleOpenModal = (event) => this.setState({showModal: true, preview: event.target.src})
  handleCloseModal = () => this.setState({showModal: false})

  render () {
    return (
      <ViewCard
        bgColor='blue'
        title='Photos &amp; Videos'
        subtitle='COME PEEK INSIDE'
      >
        <div className={styles.images}>
          {this.images.map((image, index) => (
            <img className={styles.image} key={index} src={image} onClick={this.handleOpenModal} />
          ))}
        </div>

        <Modal
          isOpen={this.state.showModal}
          contentLabel='Preview Modal'
          onRequestClose={this.handleCloseModal}
          className={styles.modal}
        >
          <img
            className={styles.preview}
            onClick={this.handleCloseModal}
            src={this.state.preview}
          />
        </Modal>
      </ViewCard>
    )
  }
}
