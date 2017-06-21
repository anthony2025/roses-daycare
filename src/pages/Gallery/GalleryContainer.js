import React, {Component} from 'react'
import Gallery from './Gallery'
import images from 'static/images'

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
      <Gallery
        images={images}
        previewImage={this.state.previewImage}
        isModalOpen={this.state.isModalOpen}
        modalOpenHandler={this.handleModalOpen}
        modalCloseHandler={this.handleModalClose}
        {...this.props}
      />
    )
  }
}

export default GalleryContainer
