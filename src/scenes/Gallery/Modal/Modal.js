import React from 'react'
import PropTypes from 'prop-types'
import styles from './Modal.css'

import ReactModal from 'react-modal'

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  handleCloseModal: PropTypes.func,
  previewImage: PropTypes.string
}

export default function Modal ({
  isModalOpen,
  handleCloseModal,
  previewImage}) {
  return (
    // Do not allow styling from outside
    <ReactModal
      isOpen={isModalOpen}
      contentLabel='Modal'
      onRequestClose={handleCloseModal}
      className={styles.modal}
    >
      <img
        className={styles.previewImage}
        onClick={handleCloseModal}
        src={previewImage}
      />
    </ReactModal>
  )
}
