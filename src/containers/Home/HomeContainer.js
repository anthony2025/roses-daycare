import React, {Component} from 'react'

import {connect} from 'react-redux'
import {getIntro, getPeople} from 'store/selectors'

import ModalBio from 'components/ModalBio'
import Modal from 'components/Modal'
import Home from './Home'

class HomeContainer extends Component {
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
          {...this.props}
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

const mapStateToProps = state => ({
  paragraphs: getIntro(state),
  people: getPeople(state)
})

export default connect(mapStateToProps, null, null, {pure: false})(HomeContainer)
