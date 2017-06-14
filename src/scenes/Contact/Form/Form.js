import React, {Component} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    text-align: center;
    width: 100%;
    margin-top: 20px;
`

const Item = styled.div`
    text-align: left;
`

const Label = styled.div`
    margin: 20px 0 7px 0;
    font-family: signika;
`

const Field = styled.input`
    display: block;
    min-height: 32px;
    width: 100%;
    font-size: inherit;
    color: #666;

    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.pink};
    }
`

const Textarea = styled.textarea`
    display: block;
    min-height: 32px;
    width: 100%;
    font-size: inherit;
    color: #666;
    height: 150px;
    resize: none;
`

const SendButton = styled.button`
    height: 35px;
    width: 120px;
    margin: 20px 0;
    border: 2px solid white;
    color: white;
    text-align: center;
    font-family: signika;

    &:focus {
      outline: none;
      border: 2px solid ${props => props.theme.pink};
    }
`

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    question: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSend = event => {
    event.preventDefault()
    this.props.onSend(this.state)
  }

  render () {
    return (
      <Wrapper>
        <Item>
          <Label>
            Name
          </Label>
          <Field
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange} />
        </Item>

        <Item>
          <Label>
            Email
          </Label>
          <Field
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange} />
        </Item>

        <Item>
          <Label>
            Question
          </Label>
          <Textarea
            name="question"
            value={this.state.question}
            onChange={this.handleChange}/>
        </Item>

        <SendButton
          onClick={this.handleSend}>
          SEND
        </SendButton>
      </Wrapper>
    )
  }
}
