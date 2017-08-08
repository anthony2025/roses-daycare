import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import WithHorizontalLines from 'styling/WithHorizontalLines'

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default function Title(props) {
  return (
    <Wrapper>
      <BigTitle>
        {props.title}
      </BigTitle>
      <WithHorizontalLines>
        <SmallTitle>
          {props.subtitle}
        </SmallTitle>
      </WithHorizontalLines>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: ${props => props.theme.primary};
  text-align: center;
`

const BigTitle = styled.div`
  font-family: SignikaSemi;

  @media (min-width: 700px) {
    font-size: 40px;
  }
  @media (max-width: 700px) {
    font-size: 30px;
  }
`

const SmallTitle = styled.div`
  font-family: Open Sans, Garamond;
  margin-top: 10px;

  @media (min-width: 700px) {
    font-size: 30px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`
