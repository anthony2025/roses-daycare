import React, {PureComponent} from 'react'
import Form from './Form'
import {post as postToDatabase} from 'services/database'

export default class FormContainer extends PureComponent {
  state = {
    name: '',
    email: '',
    phone: '',
    question: ''
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSend = event => {
    event.preventDefault()
    const payload = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      phone: this.state.phone.trim(),
      question: this.state.question.trim(),
      date: new Date().toJSON().slice(0, 10)
    }
    let areAllFieldsFilled =
      payload.name && payload.email && payload.phone && payload.question
    if (areAllFieldsFilled) {
      const dbUrl = process.env.REACT_APP_DATABASE_URL + '/questions.json'
      postToDatabase(payload, dbUrl).then(res => alert(res))
    } else {
      alert('please fill out all fields :)')
    }
  }

  render() {
    return (
      <Form
        fields={{
          name: this.state.name,
          email: this.state.email,
          phone: this.state.phone,
          question: this.state.question
        }}
        sendHandler={this.handleSend}
        changeHandler={this.handleChange}
        className={this.props.className}
      />
    )
  }
}
