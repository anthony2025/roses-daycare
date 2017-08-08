import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import appear from 'styling/appearAnimation'
import Carousel from 'components/Carousel'

Gallery.propTypes = {
  carouselImages: PropTypes.arrayOf(PropTypes.string),
  thumbnailImages: PropTypes.arrayOf(PropTypes.string),
  modalOpenHandler: PropTypes.func
}

export default function Gallery(props) {
  return (
    <Wrapper className={props.className}>
      <Carousel>
        {props.carouselImages.map(image =>
          <CarouselImage key={image} src={image} />
        )}
      </Carousel>

      <Thumbnails>
        {props.thumbnailImages.map(image =>
          <Thumbnail key={image} src={image} onClick={props.modalOpenHandler} />
        )}
      </Thumbnails>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  animation: ${appear} .9s ease;
  padding-bottom: 50px;
`

const CarouselImage = styled.img`
  animation: ${appear} .9s ease;
  height: 400px;
  width: 100%;
  margin-bottom: 20px;
  margin-top: 30px;
  box-shadow: 0 8px 14x rgba(0, 0, 0, .4);
  object-fit: cover;
  cursor: inherit;
  @media (max-width: 700px) {
    display: none;
    margin-top: 0;
  }
`

const Thumbnails = styled.div`
  @media (min-width: 700px) {
    padding: 0 10%;
  }
  @media (max-width: 700px) {
    padding: 0 5%;
  }
  margin-top: 30px;
  cursor: pointer;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-items: center;
  align-items: stretch;
  grid-gap: 5px 15px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
`

const Thumbnail = styled.img`
  cursor: inherit;
  border-radius: 1px;
  object-fit: cover;
  width: 100%;
  margin: 5px;
  border: 3px solid ${props => props.theme.primary};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, .5);
`
