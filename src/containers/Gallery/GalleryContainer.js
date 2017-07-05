import React, {PureComponent} from 'react'

import Gallery from './Gallery'
import Modal from 'components/Modal'
import ModalImage from 'components/ModalImage'

export default class GalleryContainer extends PureComponent {
  state = {
    previewImage: this.props.thumbnailImages[0],
    isModalOpen: false
  }

  handleModalOpen = event =>
    this.setState({isModalOpen: true, previewImage: event.target.src})

  handleModalClose = () => this.setState({isModalOpen: false})

  render() {
    return (
      <div>
        <Gallery
          modalOpenHandler={this.handleModalOpen}
          thumbnailImages={this.props.thumbnailImages}
          carouselImages={this.props.carouselImages}
        />

        <Modal
          isModalOpen={this.state.isModalOpen}
          modalCloseHandler={this.handleModalClose}
        >
          <ModalImage
            onClick={this.handleModalClose}
            src={this.state.previewImage}
            alt="full page preview of gallery image"
          />
        </Modal>
      </div>
    )
  }
}
