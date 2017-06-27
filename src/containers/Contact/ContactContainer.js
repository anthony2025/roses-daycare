import React, {Component} from 'react'
import Contact from './Contact'

import {connect} from 'react-redux'
import {getContactInfo} from 'store/selectors'

import {post as postToDatabase} from 'services/database'

class ContactContainer extends Component {
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
      const dbUrl = process.env.REACT_APP_DATABASE_URL + 'questions.json'
      if (dbUrl) postToDatabase(payload, dbUrl).then(res => alert(res))
      const hookUrl = process.env.REACT_APP_EMAIL_HOOK
      if (hookUrl) postToDatabase(payload, hookUrl)
    } else {
      alert('please fill out all fields :)')
    }
  }

  render() {
    return (
      <Contact
        form={{
          fields: {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            question: this.state.question
          },
          sendHandler: this.handleSend,
          changeHandler: this.handleChange
        }}
        {...this.props}
      />
    )
  }
}

const mapStateToProps = state => ({
  info: getContactInfo(state)
})

export default connect(mapStateToProps)(ContactContainer)
