import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from 'components/Image'
import Carousel from 'components/Carousel'
import Modal from 'components/Modal'

Gallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  previewImage: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  modalOpenHandler: PropTypes.func.isRequired,
  modalCloseHandler: PropTypes.func.isRequired
}

const Wrapper = styled.div`
    text-align: center;
    @media (min-width: 700px) {
      padding: 40px 10%;
    }
    @media (max-width: 700px) {
      padding: 40px 5%;
    }
`

const CarouselImage = styled(Image)`
    height: 450px;
    max-width: 600px;
    margin-bottom: 20px;
    border: 3px solid ${props => props.theme.primary};
    box-shadow: 0 1px 2px ${props => props.theme.primary};
    @media (min-width: 700px) {
      height: 450px;
      max-width: 600px;
    }
    @media (max-width: 700px) {
      width: 90%;
      max-height: 200px;
    }

`

const Thumbnails = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    align-items: stretch;
    grid-gap: 5px 15px;
`

const Thumbnail = styled(Image)`
    margin: 5px;
    box-shadow: 0px 2px 4px ${props => props.theme.primary};
    // border: 1px solid ${props => props.theme.primary};
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

      <Modal
        isModalOpen={props.isModalOpen}
        modalCloseHandler={props.modalCloseHandler}
      >
        <Image
          onClick={props.modalCloseHandler}
          src={props.previewImage}
        />
      </Modal>
    </Wrapper>
  )
}
