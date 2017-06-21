import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Carousel.propTypes = {
  currentImage: PropTypes.string.isRequired,
  clickHandler: PropTypes.func
}

const Wrapper = styled.div`
    text-align: center;
    cursor: pointer;
    overflow: hidden;
    border: 3px solid white;
    border-radius: 5px;
`

const Image = styled.img`
    height: inherit; /* this centers the image in its container, somehow */
    object-fit: cover;
    width: 100%;
`

export default function Carousel(props) {
  return (
    <Wrapper onClick={props.clickHandler} className={props.className}>
      <Image src={process.env.PUBLIC_URL + props.currentImage} />
    </Wrapper>
  )
}
