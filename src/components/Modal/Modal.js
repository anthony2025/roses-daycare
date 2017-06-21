import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ReactModal from 'react-modal'

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  modalCloseHandler: PropTypes.func.isRequired,
  previewImage: PropTypes.string.isRequired
}

const ReactModalStyled = styled(ReactModal)`
    /* react-modal dimensions respond to its children
    only works if the children don't exceed viewport dimensions */
    &.${'modal'} {
      position: fixed;
      top: 50%;
      right: auto;
      bottom: auto;
      left: 50%;
      transform: translate(-50%,-50%);
      border: 3px solid white;
      border-radius: 3%;
      outline: 0;
    }
`

const PreviewImage = styled.img`
    /* making sure children don't exceed viewport dimensions */
    max-height: 90vh;
    max-width: 90vw;
    border-radius: 2%;
`

export default function Modal (props) {
  return (
    <ReactModalStyled
      isOpen={props.isModalOpen}
      contentLabel='Modal'
      onRequestClose={props.modalCloseHandler}
      className='modal'
    >
      <PreviewImage
        onClick={props.modalCloseHandler}
        src={props.previewImage}
      />
    </ReactModalStyled>
  )
}
