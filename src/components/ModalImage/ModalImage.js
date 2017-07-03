import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

ModalImage.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
  alt: PropTypes.string
}

export default function ModalImage(props) {
  return <Image {...props} />
}

const Image = styled.img`
  cursor: inherit;
  border-radius: 1px;
  object-fit: cover;
  width: 100%;
`
