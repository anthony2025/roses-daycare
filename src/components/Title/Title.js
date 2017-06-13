import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WithHorizontalLines from 'src/styling/WithHorizontalLines'

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

const Wrapper = styled.div`
    text-align: center;
    margin-bottom: 40px;
`

const BigTitle = styled.div`
    font-weight: bold;
    font-family: signika;

    @media (max-width: 700px) {
      font-size: 30px;
    }
    @media (min-width: 700px) {
      font-size: 40px;
    }
`

const SmallTitle = styled.div`
    margin-top: 20px;
    font-family: Open Sans;
    font-weight: 200;

    @media (max-width: 700px) {
      font-size: 14px;
    }
    @media (min-width: 700px) {
      font-size: 20px;
    }
`

export default function Title(props) {
  return (
    <Wrapper>
      <BigTitle>{props.title}</BigTitle>
      <WithHorizontalLines>
        <SmallTitle>{props.subtitle}</SmallTitle>
      </WithHorizontalLines>
    </Wrapper>
  )
}
