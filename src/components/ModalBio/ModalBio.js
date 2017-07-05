import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

ModalBio.propTypes = {
  person: PropTypes.object,
  modalCloseHandler: PropTypes.func
}

export default function ModalBio(props) {
  return (
    <Wrapper className={props.className} onClick={props.modalCloseHandler}>
      <Image src={props.person.image} />

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
  overflow: hidden;
  @media (min-width: 700px) {
    flex-direction: row;
  }
  @media (max-width: 700px) and (min-height: 480px) {
    flex-direction: column;
  }
`

const Name = styled.div`
  @media (min-width: 700px) {
    font-size: 24px;
  }
  @media (max-width: 700px) {
    font-size: 20px;
  }
`

const Subtitle = styled.div`
  color: ${props => props.theme.accent};
  font-size: 14px;
  @media (min-width: 700px) {
    margin-bottom: 1.5em;
  }
  @media (max-width: 700px) {
    margin-bottom: .5em;
  }
`

const Description = styled.div`
  @media (min-width: 700px) {
    font-size: 20px;
  }
  @media (max-width: 700px) {
    font-size: 16px;
  }
`

const Content = styled.div`margin: 30px;`

const Image = styled.img`
  border: 1px solid ${props => props.theme.opposite};
  border-radius: 5px;
  width: 35%;
  height: auto;
  cursor: inherit;
  object-fit: cover;
`
