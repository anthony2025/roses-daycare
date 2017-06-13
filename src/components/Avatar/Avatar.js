import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

const Wrapper = styled.div`
    text-align: center;
    overflow: hidden;
    margin: 10px 0;
    line-height: 1.3;
`

const Name = styled.div`
    font-size: 12px;
    font-family: signika;
`

const Subtitle = styled.div`
    font-size: 10px;
    font-weight: 200;
`

const Image = styled.img`
    width: 17vw;
    height: 17vw;
    border: 3px solid white;
    border-radius: 100%;
    object-fit: cover;
    filter: grayscale(75%);

    &:hover,
    &:focus {
      transition: .75s;
      filter: grayscale(25%);
    }

    @media (max-width: 700px) {
      width: 40vw;
      height: 40vw;
    }
    @media (min-width: 700px) {
      width: 15vw;
      height: 15vw;
    }
`

export default function Avatar(props) {
  return (
    <Wrapper>
      <Image src={props.img} />
      <Name>
        {props.name}
      </Name>
      <Subtitle>
        {props.subtitle}
      </Subtitle>
    </Wrapper>
  )
}
