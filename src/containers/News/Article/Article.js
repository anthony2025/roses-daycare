import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from 'components/Image'

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string.isRequired
}

const Wrapper = styled.div`
    text-align: center;
    color: ${props => props.theme.text};
    font-family: SignikaLight;
    line-height: 1.5;
    font-size: 30px;
`

const Title = styled.div`
    text-align: center;
`

const StyledImage = styled(Image)`
    margin: 10px auto;
    border: 2px solid ${props => props.theme.text};
`

const Paragraph = styled.div`
    text-align: left;
    line-height: 1.25;

    @media (max-width: 700px) {
      font-size: 15px;
      margin-bottom: 30px;
    }
    @media (min-width: 700px) {
      font-size: 20px;
      margin-bottom: 25px;
    }
`

export default function Article (props) {
  return (
    <Wrapper className={props.className}>
      <StyledImage src={props.image} />
      <Title>{props.title.toUpperCase()}</Title>
      <Paragraph>{props.text}</Paragraph>
    </Wrapper>
  )
}
