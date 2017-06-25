import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Form.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
  sendHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired
}

const Wrapper = styled.div`
    color: ${props => props.theme.text};
    text-align: center;
`

const Item = styled.div`
    text-align: left;
`

const Label = styled.div`
    margin: 20px 0 7px 0;
    font-family: SignikaRegular;
`

const Field = styled.input`
    display: block;
    min-height: 32px;
    width: 100%;
    font-size: inherit;
    color: #333;

    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.primary};
    }
`

const Textarea = styled.textarea`
    display: block;
    min-height: 32px;
    width: 100%;
    font-size: inherit;
    color: #333;
    height: 150px;
    resize: none;
    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.primary};
    }
`

const SendButton = styled.button`
    height: 35px;
    width: 120px;
    margin: 20px 0;
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    text-align: center;
    font-family: SignikaLight;

    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.primary};
    }
`

export default function Form(props) {
  return (
    <Wrapper className={props.className}>
      <Item>
        <Label>
          NAME
        </Label>
        <Field
          name="name"
          type="text"
          value={props.name}
          onChange={props.changeHandler}
        />
      </Item>

      <Item>
        <Label>
          EMAIL
        </Label>
        <Field
          name="email"
          type="text"
          value={props.email}
          onChange={props.changeHandler}
        />
      </Item>

      <Item>
        <Label>
          PHONE
        </Label>
        <Field
          name="phone"
          type="text"
          value={props.phone}
          onChange={props.changeHandler}
        />
      </Item>

      <Item>
        <Label>
          QUESTION
        </Label>
        <Textarea
          name="question"
          value={props.question}
          onChange={props.changeHandler}
        />
      </Item>

      <SendButton onClick={props.sendHandler}>
        SEND
      </SendButton>
    </Wrapper>
  )
}
