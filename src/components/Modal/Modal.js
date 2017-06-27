import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ReactModal from 'react-modal'

Modal.propTypes = {
  isModalOpen: PropTypes.bool,
  modalCloseHandler: PropTypes.func,
  children: PropTypes.node
}

const ReactModalStyled = styled(ReactModal)`
    // react-modal dimensions respond to its children and
    // only works if the children don't exceed viewport dimensions
    &.${'modal'} {
      position: fixed;
      top: 50%;
      right: auto;
      bottom: auto;
      left: 50%;
      transform: translate(-50%,-50%);
      outline: 0;
      width: 90vw;
      max-height: 90vh;
      cursor: pointer;
    }

    & > * {
      // making sure children don't exceed viewport dimensions
      max-height: 90vh;
      max-width: 90vw;
    }
`

export default function Modal (props) {
  return (
    <ReactModalStyled
      isOpen={props.isModalOpen}
      contentLabel='Modal'
      onRequestClose={props.modalCloseHandler}
      className='modal'
    >
      {props.children}
    </ReactModalStyled>
  )
}
