import React, {PureComponent} from 'react'

import ModalBio from 'components/ModalBio'
import Modal from 'components/Modal'
import Home from './Home'

export default class HomeContainer extends PureComponent {
  state = {
    modalPerson: null,
    isModalOpen: false
  }

  handleModalOpen = key => event => {
    this.setState({isModalOpen: true, modalPerson: this.props.people[key]})
  }

  handleModalClose = () => this.setState({isModalOpen: false})

  render() {
    return (
      <div>
        <Home
          modalOpenHandler={this.handleModalOpen}
          paragraphs={this.props.paragraphs}
          people={this.props.people}
        />
        <Modal
          isModalOpen={this.state.isModalOpen}
          modalCloseHandler={this.handleModalClose}
        >
          <ModalBio
            modalCloseHandler={this.handleModalClose}
            person={this.state.modalPerson}
          />
        </Modal>
      </div>
    )
  }
}
