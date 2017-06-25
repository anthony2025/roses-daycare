import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from 'components/Image'

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string,
  subtitle: PropTypes.string
}

const Wrapper = styled.div`
    text-align: center;
    line-height: 1.3;
    color: ${props => props.theme.primary};
    font-family: SignikaLight;
`

const Name = styled.div`
    font-size: 15px;
`

const Subtitle = styled.div`
    font-size: 12px;
`

const StyledImage = styled(Image)`
    border: 3px solid ${props => props.theme.primary};
    border-radius: 50%;

    &:hover,
    &:focus {
      transition: .75s;
      box-shadow: 0 0 10px ${props => props.theme.primary};
      filter: grayscale(90%);
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
      <StyledImage src={props.img} />
      <Name>
        {props.name}
      </Name>
      <Subtitle>
        {props.subtitle}
      </Subtitle>
    </Wrapper>
  )
}
