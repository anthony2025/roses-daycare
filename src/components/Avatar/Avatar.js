import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from 'components/Image'

Avatar.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  border: PropTypes.number
}

const Wrapper = styled.div`
    cursor: pointer;
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
    border: ${props => props.border}px solid ${props => props.theme.primary};
    border-radius: 50%;
    width: inherit;
    height: inherit;
    &:hover {
      transition: .75s;
      filter: grayscale(90%);
    }
`

export default function Avatar(props) {
  return (
    <Wrapper className={props.className} {...props}>
      <StyledImage src={props.image} border={props.border} />
      <Name>
        {props.name}
      </Name>
      <Subtitle>
        {props.subtitle}
      </Subtitle>
    </Wrapper>
  )
}
