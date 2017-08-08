import React from 'react'
import styled from 'styled-components'

import appear from 'styling/appearAnimation'
import Map from './Map'
import Form from './Form'
import Info from './Info'

export default function Contact(props) {
  return (
    <Wrapper className={props.className}>
      <Container>
        <StyledInfo />
        <StyledForm />
      </Container>
      <StyledMap />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${appear} .9s ease;
`

const Container = styled.div`
  width: 100%;
  @media (max-width: 500px) {
    font-size: 15px;
    padding: 40px 10%;
  }
  @media (min-width: 500px) and (max-width: 1000px) {
    font-size: 19px;
    padding: 40px 20%;
  }
  @media (min-width: 1000px) {
    font-size: 20px;
    padding: 40px 30%;
  }
`

const StyledMap = styled(Map)`
  margin-top: 30px;
  width: 100%;
  height: 400px;
`

const StyledInfo = styled(Info)`
  width: 100%;
  margin-top: 20px;
`

const StyledForm = styled(Form)`
  width: 100%;
  margin-top: 20px;
`
