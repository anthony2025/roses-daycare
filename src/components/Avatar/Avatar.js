import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string,
  subtitle: PropTypes.string
}

const Wrapper = styled.div`
    text-align: center;
    line-height: 1.3;
    color: ${props => props.theme.text};
    font-family: SignikaLight;
`

const Name = styled.div`
    font-size: 15px;
`

const Subtitle = styled.div`
    font-size: 12px;
`

const Image = styled.img`
    border: 3px solid white;
    border-radius: 50%;
    object-fit: cover;
    filter: grayscale(90%);

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
    <Wrapper className={props.className}>
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
