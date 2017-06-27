import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from 'components/Image'

ModalBio.propTypes = {
  person: PropTypes.object,
  modalCloseHandler: PropTypes.func
}

const Wrapper = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    padding: 10px;
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.opposite};
    font-family: SignikaLight;
    @media (min-width: 700px) {
      flex-direction: row;
    }
    @media (max-width: 700px) {
      flex-direction: column;
    }
`

const Name = styled.div`
    font-size: 19px;
`

const Subtitle = styled.div`
    font-size: 12px;
    margin-bottom: 10px;
`

const Description = styled.div`
    font-size: 19px;
`

const Content = styled.div`
  margin: 10%;
`

const StyledImage = styled(Image)`
    border: 3px solid ${props => props.theme.primary};
    border-radius: 5px;
    width: 40%;
    height: auto;
`

export default function ModalBio(props) {
  return (
    <Wrapper
      className={props.className}
      onClick={props.modalCloseHandler}
      {...props}
    >
      <StyledImage
        src={props.person.image}
      />

      <Content>
        <Name>
          {props.person.name}
        </Name>
        <Subtitle>
          {props.person.subtitle}
        </Subtitle>
        <Description>
          {props.person.description}
        </Description>
      </Content>
    </Wrapper>
  )
}
