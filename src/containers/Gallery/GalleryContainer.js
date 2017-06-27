import React, {Component} from 'react'
import images from 'store/images'

import Gallery from './Gallery'
import Image from 'components/Image'
import Modal from 'components/Modal'

class GalleryContainer extends Component {
  state = {
    previewImage: images[0],
    isModalOpen: false
  }

  handleModalOpen = event =>
    this.setState({isModalOpen: true, previewImage: event.target.src})

  handleModalClose = () => this.setState({isModalOpen: false})

  render() {
    return (
      <div>
        <Gallery
          images={images}
          modalOpenHandler={this.handleModalOpen}
          {...this.props}
        />

        <Modal
          isModalOpen={this.state.isModalOpen}
          modalCloseHandler={this.handleModalClose}
        >
          <Image
            onClick={this.handleModalClose}
            src={this.state.previewImage}
          />
        </Modal>
      </div>
    )
  }
}

export default GalleryContainer
