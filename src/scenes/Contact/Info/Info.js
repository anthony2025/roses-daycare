import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Info.propTypes = {
  info: PropTypes.object.isRequired
}

const Wrapper = styled.div`
    width: 100%;
    margin-top: 20px;
`

const Item = styled.div`
    margin-bottom: 30px;
`

const Subtitle = styled.div`
    font-size: inherit;
    font-family: SignikaRegular;
    border-bottom: 3px solid ${props => props.theme.pink};
`

const Field = styled.div`
    font-size: inherit;
    font-family: SignikaLight;
    margin-top: 7px;
`

export default function Info(props) {
  return (
    <Wrapper>
      <Item>
        <Subtitle>EMAIL</Subtitle>
        <Field>{props.info.email}</Field>
      </Item>
      <Item>
        <Subtitle>PHONE</Subtitle>
        <Field>{props.info.phone}</Field>
      </Item>
      <Item>
        <Subtitle>ADDRESS</Subtitle>
        <Field>
          {props.info.address1}
          <br />
          {props.info.address2}
        </Field>
      </Item>
      <Item>
        <Subtitle>FACEBOOK</Subtitle>
        <Field>{props.info.facebook}</Field>
      </Item>
    </Wrapper>
  )
}
