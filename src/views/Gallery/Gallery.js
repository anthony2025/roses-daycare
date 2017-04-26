import React, {Component} from 'react'
import styles from './Gallery.css'

import ViewCard from 'containers/ViewCard'
import Modal from 'react-modal'

export default class Gallery extends Component {
  urls = [
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
      <ViewCard bgColor='blue' title='Photos &amp; Videos' subtitle='COME PEEK INSIDE'>
        <div className={styles.gallery}>
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

          <div className={styles.images}>
            {this.urls.map((url, index) =>
              <div className={styles.image} key={index}><img src={url} onClick={this.handleOpenModal}/></div>)}
          </div>
        </div>
      </ViewCard>
    )
  }
}
