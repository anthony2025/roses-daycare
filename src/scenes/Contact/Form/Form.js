import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Form.css'

import postToDB from 'src/services/postToFirebase'

export default class Form extends Component {
  static propTypes = {
    className: PropTypes.string
  }

  state = {
    name: '',
    email: '',
    question: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSend = (event) => {
    event.preventDefault()
    const url = 'https://roses-daycare.firebaseio.com/contact.json'
    const data = {
      name: this.state.name.trim(),
      email: this.state.email.trim(),
      question: this.state.question.trim(),
      date: new Date().toJSON().slice(0,10)
    }
    // all fields required, if any is empty break
    if (!data.name || !data.email || !data.question) return null
    postToDB(data, url)
  }

  render () {
    return (
      <form className={styles.form  + ' ' + this.props.className}>
        <div className={styles.item}>
          <div className={styles.label}>
            Name
          </div>
          <input
            className={styles.field}
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange} />
        </div>

        <div className={styles.item}>
          <div className={styles.label}>
            Email
          </div>
          <input
            className={styles.field}
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange} />
        </div>

        <div className={styles.item}>
          <div className={styles.label}>
            Question
          </div>
          <textarea
            className={styles.field}
            name="question"
            value={this.state.question}
            onChange={this.handleChange}/>
        </div>

        <button
          className={styles.send}
          onClick={this.handleSend}>
          SEND
        </button>
      </form>
    )
  }
}
