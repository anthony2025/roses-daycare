import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Link} from 'react-router-dom'

const theme = {
  blue: '#79B9D9',
  pink: '#FEBCBD',
  red: '#FD8384',
  green: '#9ED2A6'
}

Card.propTypes = {
  name: PropTypes.string,
  text: PropTypes.string.isRequired,
  path: PropTypes.string
}

const Wrapper = styled(Link)`
    // Styles for multiples of four
    --cardsGap: 2%;

    @media (max-width: 700px) {
      margin: var(--cardsGap) 0;
    }
    @media (min-width: 700px) {
      margin: 0 calc(var(--cardsGap) / 3);
      &:first-of-type {margin-left: 0;}
      &:last-of-type {margin-right: 0;}
    }

    padding: 17px;
    border-style: solid;
    border-width: 12px 0 0 0;

    &:nth-child(4n) {
      background-color: ${() => theme.blue};
      border-color: ${() => theme.green};
    }
    &:nth-child(4n+1) {
      background-color: ${() => theme.pink};
      border-color: ${() => theme.blue};
    }
    &:nth-child(4n+2) {
      background-color: ${() => theme.green};
      border-color: ${() => theme.red};
    }
    &:nth-child(4n+3) {
      background-color: ${() => theme.red};
      border-color: ${() => theme.pink};
    }
`

const Title = styled.div`
    font-family: SignikaSemi;
    font-size: 20px;
`

const Text = styled.div`
    font-family: serif;
    font-size: 14px;
    line-height: 1.2;
    margin: 10px 0 15px 0;
`

const ReadMore = styled.div`
    font-family: SignikaRegular;
    background-color: white;
    color: ${() => theme.red};
    padding: 5px;
    font-size: 13px;
    text-align: right;
`

export default function Card(props) {
  return (
    <Wrapper to={props.path} className={props.className}>
      <Title>{props.name}</Title>
      <Text>{props.text}</Text>
      <ReadMore>Read more</ReadMore>
    </Wrapper>
  )
}
