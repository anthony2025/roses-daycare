import React, {Component} from 'react'
import styles from './Form.css'

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
      <form className={styles.form}>
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
