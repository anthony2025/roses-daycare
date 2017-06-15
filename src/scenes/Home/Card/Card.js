import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {Link} from 'react-router-dom'

Card.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string
}

const Wrapper = styled(Link)`
    --cardsGap: 2%;
    padding: 17px;
    border-style: solid;
    border-width: 12px 0 0 0;

    &:nth-child(4n) {
      background-color: ${props => props.theme.blue};
      border-color: ${props => props.theme.green};
    }
    &:nth-child(4n+1) {
      background-color: ${props => props.theme.pink};
      border-color: ${props => props.theme.blue};
    }
    &:nth-child(4n+2) {
      background-color: ${props => props.theme.green};
      border-color: ${props => props.theme.red};
    }
    &:nth-child(4n+3) {
      background-color: ${props => props.theme.red};
      border-color: ${props => props.theme.pink};
    }

    @media (max-width: 700px) {
      margin: var(--cardsGap) 0;
    }
    @media (min-width: 700px) {
      margin: 0 calc(var(--cardsGap)/3);
      &:first-of-type {margin-left: 0;}
      &:last-of-type {margin-right: 0;}
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
    color: ${props => props.theme.red};
    padding: 5px;
    font-size: 13px;
    text-align: right;
`

export default function Card(props) {
  return (
    <Wrapper to={props.path}>
      <Title>{props.title}</Title>
      <Text>{props.text}</Text>
      <ReadMore>Read more</ReadMore>
    </Wrapper>
  )
}
