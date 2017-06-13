import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.css'

import ReactModal from 'react-modal'

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  previewImage: PropTypes.string
}

export default function Modal (props) {
  return (
    <ReactModal
      isOpen={props.isModalOpen}
      contentLabel='Modal'
      onRequestClose={props.handleCloseModal}
      className={styles.modal}
    >
      <img
        className={styles.previewImage}
        onClick={props.handleCloseModal}
        src={props.previewImage}
      />
    </ReactModal>
  )
}
