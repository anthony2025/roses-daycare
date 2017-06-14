import React, {Component} from 'react'
import styled from 'styled-components'

import IMAGES from 'src/content/images'
import {generate as id} from 'shortid'

import Title from 'src/components/Title/Title'
import Modal from './Modal/Modal'

const Wrapper = styled.div`
    background-color: ${props => props.theme.blue};
    padding: 40px 2%;
    border: 6px solid white;
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
    border-radius: 3%;
    margin: 5px;
    object-fit: cover;
    cursor: pointer;
`

export default class Gallery extends Component {
  state = {
    previewImage: IMAGES[0],
    isModalOpen: false
  }

  handleOpenModal = event =>
    this.setState({isModalOpen: true, previewImage: event.target.src})
  handleCloseModal = () => this.setState({isModalOpen: false})

  render() {
    return (
      <Wrapper>
        <Title title="Photos &amp; Videos" subtitle="COME PEEK INSIDE" />

        <Images>
          {IMAGES.map(image =>
            <Image
              key={id()}
              src={image}
              onClick={this.handleOpenModal}
            />
          )}
        </Images>

        <Modal
          isModalOpen={this.state.isModalOpen}
          handleCloseModal={this.handleCloseModal}
          previewImage={this.state.previewImage}
        />
      </Wrapper>
    )
  }
}
