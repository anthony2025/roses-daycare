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
    display: flex;

    @media (max-width: 700px) {
      flex-direction: column;
      align-items: center;
    }
    @media (min-width: 700px) {
      flex-direction: row;
      justify-items: space-between;
    }
`

const Title = styled.div`
    font-size: 20px;
    margin-bottom: 10px;
    color: ${props => props.theme.accent};
`

const Content = styled.div`
    @media (min-width: 700px) {
    }
`

const StyledImage = styled(Image)`
    height: 100%;
    border: 2px solid ${props => props.theme.text};
    @media (max-width: 700px) {
      width: 100%;
      margin-bottom: 10px;
    }

    @media (min-width: 700px) {
      max-width: 40%;
      margin-top: 45px;
      margin-right: 30px;
    }
`

const Paragraph = styled.div`
    text-align: left;
    line-height: 1.25;

    @media (max-width: 700px) {
      font-size: 15px;
      margin-bottom: 25px;
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

      <Content>
        <Title>{props.title.toUpperCase()}</Title>
        <Paragraph>{props.text}</Paragraph>
      </Content>
    </Wrapper>
  )
}
