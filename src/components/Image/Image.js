import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Image.propTypes = {
  src: PropTypes.string
}

const StyledImage = styled.img`
  cursor: inherit;
  border-radius: 1px;
  object-fit: cover;
  width: 100%;
`

export default function Image(props) {
  return (
    <StyledImage
      className={props.className}
      src={process.env.PUBLIC_URL + props.src}
      {...props}
    />
  )
}
