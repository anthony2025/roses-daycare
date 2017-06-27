import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import appear from 'styling/appearAnimation'
import Image from 'components/Image'
import Carousel from 'components/Carousel'

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string),
  modalOpenHandler: PropTypes.func,
}

const Wrapper = styled.div`
    text-align: center;
    @media (min-width: 700px) {
      padding: 40px 10%;
    }
    @media (max-width: 700px) {
      padding: 40px 5%;
    }
    animation: ${appear} .9s ease;
`

const CarouselImage = styled(Image)`
    height: 400px;
    width: 80%;
    max-width: 600px;
    margin-bottom: 20px;
    box-shadow: 0 2px 4px ${props => props.theme.primary};
    @media (max-width: 700px) {
      display: none;
    }
`

const Thumbnails = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    align-items: stretch;
    grid-gap: 5px 15px;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
`

const Thumbnail = styled(Image)`
    margin: 5px;
    box-shadow: 0px 2px 4px ${props => props.theme.primary};
`

export default function Gallery(props) {
  return (
    <Wrapper className={props.className}>
      <Carousel>
        {props.images.map(image =>
          <CarouselImage
            key={image}
            src={process.env.PUBLIC_URL + image}
          />
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
