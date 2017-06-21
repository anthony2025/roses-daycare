import React, {Component} from 'react'
import Form from './Form'

import {post as postToDatabase} from 'services/database'
import {DATABASE_URL} from 'services/urls'

export default class FormContainer extends Component {
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
    const payload = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      question: this.state.question.trim(),
      date: new Date().toJSON().slice(0, 10)
    }
    // all fields required
    if (payload.name && payload.email && payload.question) {
      const url = DATABASE_URL + 'questions.json'
      postToDatabase(payload, url)
    }
  }

  render() {
    return (
      <Form
        name={this.state.name}
        email={this.state.email}
        question={this.state.question}
        sendHandler={this.handleSend}
        changeHandler={this.handleChange}
        {...this.props}
      />
    )
  }
}
