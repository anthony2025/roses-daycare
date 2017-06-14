import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  text: PropTypes.string.isRequired
}

const Wrapper = styled.div`
    text-align: center;
    margin-bottom: 60px;
`

const Title = styled.div`
    text-align: center;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    margin: 10px auto;
    border: 2px solid white;
    border-radius: 5%;
`

const Paragraph = styled.div`
    text-align: left;
    line-height: 1.25;
    font-weight: 200;

    @media (max-width: 700px) {
      font-size: 14px;
      margin-bottom: 30px;
    }
    @media (min-width: 700px) {
      font-size: 15px;
      margin-bottom: 25px;
    }
`

export default function Article (props) {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Image src={props.image} />
      <Paragraph>{props.text}</Paragraph>
    </Wrapper>
  )
}
