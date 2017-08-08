import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Form.propTypes = {
  fields: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    question: PropTypes.string
  }),
  sendHandler: PropTypes.func,
  changeHandler: PropTypes.func
}

export default function Form(props) {
  const {question, ...fields} = props.fields
  return (
    <Wrapper className={props.className}>
      {Object.keys(fields).map(key =>
        <Item key={key}>
          <Label htmlFor={key}>
            {key.toUpperCase()}
          </Label>
          <Field
            name={key}
            id={key}
            type="text"
            value={fields[key].name}
            onChange={props.changeHandler}
          />
        </Item>
      )}

      <Item key="question">
        <Label htmlFor="question">QUESTION</Label>
        <Textarea
          name="question"
          id="question"
          value={props.fields.question}
          onChange={props.changeHandler}
        />
      </Item>

      <SendButton onClick={props.sendHandler}>SEND</SendButton>
    </Wrapper>
  )
}

const Wrapper = styled.div`text-align: center;`

const Item = styled.div`text-align: left;`

const Label = styled.div`
  margin: 20px 0 7px 0;
  color: ${props => props.theme.primary};
  font-family: SignikaRegular;
`

const Field = styled.input`
  color: ${props => props.theme.primary};
  background: inherit;
  display: block;
  min-height: 32px;
  width: 100%;
  font-size: inherit;
  outline: 0;
  border: 2px solid ${props => props.theme.primary};
  &:focus {
    border: 2px solid ${props => props.theme.accent};
  }
`

const Textarea = Field.withComponent('textarea').extend`
  height: 150px;
`

const SendButton = styled.button`
  height: 35px;
  width: 120px;
  margin: 20px 0;
  outline: 0;
  border: 2px solid ${props => props.theme.primary};
  color: ${props => props.theme.primary};
  text-align: center;
  font-family: Open Sans, Garamond;

  &:focus {
    border: 2px solid ${props => props.theme.accent};
  }
`
