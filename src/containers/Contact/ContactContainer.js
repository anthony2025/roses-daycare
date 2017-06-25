import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

import {connect} from 'react-redux'
import {getContactInfo} from 'store/selectors'

import {post as postToDatabase} from 'services/database'
import {DATABASE_URL} from 'services/urls'

class ContactContainer extends Component {
  static propTypes = {
    info: PropTypes.shape({
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      address1: PropTypes.string.isRequired,
      address2: PropTypes.string.isRequired,
      facebook: PropTypes.string.isRequired
    }).isRequired
  }

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
    // all fields required
    if (payload.name && payload.email && payload.phone && payload.question) {
      const url = DATABASE_URL + 'questions.json'
      postToDatabase(payload, url)
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
