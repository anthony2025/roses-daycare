import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  border: PropTypes.number,
  onClick: PropTypes.func
}

export default function Avatar(props) {
  return (
    <Wrapper className={props.className} onClick={props.onClick}>
      <Image src={props.image} border={props.border} />
      <Name>
        {props.name}
      </Name>
      <Subtitle>
        {props.subtitle}
      </Subtitle>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  cursor: pointer;
  text-align: center;
  line-height: 1.3;
  color: ${props => props.theme.primary};
  font-family: SignikaLight;
  border-radius: 50%;
`

const Name = styled.div`font-size: 15px;`

const Subtitle = styled.div`font-size: 12px;`

const Image = styled.img`
  border: ${props => props.border}px solid ${props => props.theme.primary};
  box-shadow: 0 4px 9px 2px ${props => props.theme.primary}33;
  border-radius: 50%;
  width: inherit;
  height: inherit;
  cursor: inherit;
  object-fit: cover;
  &:hover {
    transition: .75s;
    filter: grayscale(90%);
  }
`
