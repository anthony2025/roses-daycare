import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

ModalImage.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
  alt: PropTypes.string
}

export default function ModalImage(props) {
  return (
    <Image
      onClick={props.onClick}
      className={props.className}
      src={props.src}
      alt={props.alt}
    />
  )
}

const Image = styled.img`
  cursor: inherit;
  border-radius: 1px;
  object-fit: cover;
  width: 100%;
`
