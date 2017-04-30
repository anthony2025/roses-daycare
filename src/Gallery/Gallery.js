import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Gallery.css'

import ViewCard from 'src/shared/ViewCard'
import Modal from './Modal'

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
    '/img/6img.jpg'
  ]

  static propTypes = {
    className: PropTypes.string
  }

  state = {
    previewImage: "/img/1img.jpg",
    isModalOpen: false
  }

  handleOpenModal = (event) => this.setState({isModalOpen: true, previewImage: event.target.src})
  handleCloseModal = () => this.setState({isModalOpen: false})

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
          isModalOpen={this.state.isModalOpen}
          handleCloseModal={this.handleCloseModal}
          previewImage={this.state.previewImage}
        />
      </ViewCard>
    )
  }
}
