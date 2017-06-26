import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import grayscale from 'styling/grayscaleEffect'
import Image from 'components/Image'

Avatar.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string,
  subtitle: PropTypes.string,
  onClick: PropTypes.func
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
    width: inherit;
    height: inherit;

    ${props => (props.onClick ? `;` : grayscale)}
`

export default function Avatar(props) {
  return (
    <Wrapper className={props.className}>
      <StyledImage src={props.img} onClick={props.onClick} />
      <Name>
        {props.name}
      </Name>
      <Subtitle>
        {props.subtitle}
      </Subtitle>
    </Wrapper>
  )
}
