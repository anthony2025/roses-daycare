import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from 'components/Image'

ModalBio.propTypes = {
  person: PropTypes.object,
  modalCloseHandler: PropTypes.func
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.opposite};
    border-radius: 5px;
    border: 1px solid ${props => props.theme.opposite};

    font-family: SignikaLight;
    line-height: 1.5;
    cursor: pointer;
    @media (min-width: 700px) {
      flex-direction: row;
    }
    @media (max-width: 700px) {
      flex-direction: column;
    }
`

const Name = styled.div`
    font-size: 24px;
`

const Subtitle = styled.div`
    font-size: 14px;
    color: ${props => props.theme.accent};
    margin-bottom: 20px;
`

const Description = styled.div`
    font-size: 18px;
`

const Content = styled.div`
  margin: 10%;
`

const StyledImage = styled(Image)`
    border: 1px solid ${props => props.theme.opposite};
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
          {props.person.subtitle && props.person.subtitle.toUpperCase()}
        </Subtitle>
        <Description>
          {props.person.description}
        </Description>
      </Content>
    </Wrapper>
  )
}
