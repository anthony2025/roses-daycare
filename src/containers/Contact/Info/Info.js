import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Info.propTypes = {
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  address1: PropTypes.string.isRequired,
  address2: PropTypes.string.isRequired,
  facebook: PropTypes.string.isRequired
}

const Wrapper = styled.div`
    color: ${props => props.theme.primary};
`

const Item = styled.div`
    margin-bottom: 30px;
`

const Subtitle = styled.div`
    font-size: inherit;
    font-family: SignikaRegular;
    text-align: left;
    border-bottom: 2px solid ${props => props.theme.accent};
`

const Field = styled.div`
    font-size: inherit;
    text-align: right;
    font-family: SignikaLight;
    margin-top: 7px;
`

export default function Info(props) {
  return (
    <Wrapper className={props.className}>
      <Item>
        <Subtitle>EMAIL</Subtitle>
        <Field>{props.email}</Field>
      </Item>
      <Item>
        <Subtitle>PHONE</Subtitle>
        <Field>{props.phone}</Field>
      </Item>
      <Item>
        <Subtitle>ADDRESS</Subtitle>
        <Field>
          {props.address1}
          <br />
          {props.address2}
        </Field>
      </Item>
      <Item>
        <Subtitle>FACEBOOK</Subtitle>
        <Field>{props.facebook}</Field>
      </Item>
    </Wrapper>
  )
}
