import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import appear from 'styling/appearAnimation'
import Image from 'components/Image'
import Carousel from 'components/Carousel'

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  modalOpenHandler: PropTypes.func
}

const Wrapper = styled.div`
  text-align: center;
  animation: ${appear} .9s ease;
  padding: 30px 0 50px 0;
`

const CarouselImage = styled(Image)`
  height: 400px;
  width: 100%;
  margin-bottom: 20px;
  box-shadow: 0 8px 14x ${props => props.theme.primary}33;
  @media (max-width: 700px) {
    display: none;
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

const Thumbnail = styled(Image)`
  margin: 5px;
  box-shadow: 0px 8px 14px ${props => props.theme.primary}33;
`

export default function Gallery(props) {
  return (
    <Wrapper className={props.className}>
      <Carousel>
        {props.images.map(image =>
          <CarouselImage key={image} src={process.env.PUBLIC_URL + image} />
        )}
      </Carousel>

      <Thumbnails>
        {props.images.map(image =>
          <Thumbnail
            key={image}
            src={process.env.PUBLIC_URL + image}
            onClick={props.modalOpenHandler}
          />
        )}
      </Thumbnails>
    </Wrapper>
  )
}
