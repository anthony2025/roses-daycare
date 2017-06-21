import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Carousel from 'components/Carousel'
import Modal from 'components/Modal'

Gallery.propTypes = {
  images: PropTypes.array.isRequired,
  previewImage: PropTypes.string.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
  modalOpenHandler: PropTypes.func.isRequired,
  modalCloseHandler: PropTypes.func.isRequired
}

const StyledCarousel = styled(Carousel)`
    height: 450px;
    width: 80%;
`

const Images = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-items: center;
    align-items: stretch;
    grid-gap: 5px 15px;
`

const Image = styled.img`
    border: 3px solid white;
    width: 100%;
    border-radius: 3px;
    margin: 5px;
    object-fit: cover;
    cursor: pointer;
`

export default function Gallery(props) {
  return (
    <div>
      <StyledCarousel images={props.images} />

      <Images>
        {props.images.map(image =>
          <Image
            key={image}
            src={process.env.PUBLIC_URL + image}
            onClick={props.modalOpenHandler}
          />
        )}
      </Images>

      <Modal
        isModalOpen={props.isModalOpen}
        modalCloseHandler={props.modalCloseHandler}
        previewImage={props.previewImage}
      />
    </div>
  )
}
