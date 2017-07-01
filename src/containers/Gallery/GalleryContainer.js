import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getImages} from 'store/selectors'

import Gallery from './Gallery'
import Image from 'components/Image'
import Modal from 'components/Modal'

class GalleryContainer extends Component {
  state = {
    previewImage: this.props.images[0],
    isModalOpen: false
  }

  handleModalOpen = event =>
    this.setState({isModalOpen: true, previewImage: event.target.src})

  handleModalClose = () => this.setState({isModalOpen: false})

  render() {
    return (
      <div>
        <Gallery
          images={this.props.images}
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

const mapStateToProps = state => ({
  images: getImages(state)
})

export default connect(mapStateToProps)(GalleryContainer)
