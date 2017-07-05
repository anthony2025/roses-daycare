import React, {PureComponent} from 'react'

import ModalBio from 'components/ModalBio'
import Modal from 'components/Modal'
import News from './News'

export default class NewsContainer extends PureComponent {
  state = {
    modalPerson: null,
    isModalOpen: false
  }

  handleModalOpen = key => event =>
    this.setState({isModalOpen: true, modalPerson: this.props.people[key]})

  handleModalClose = () => this.setState({isModalOpen: false})

  render() {
    return (
      <div>
        <News
          modalOpenHandler={this.handleModalOpen}
          people={this.props.people}
          articles={this.props.articles}
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
