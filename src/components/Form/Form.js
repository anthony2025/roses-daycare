import React, {Component} from 'react'
import styles from './Form.css'

export default class Form extends Component {
  state = {
    name: '',
    email: '',
    question: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const response = {
      name : this.state.name.trim(),
      email : this.state.email.trim(),
      question : this.state.question.trim()
    }
    if (!response.name || !response.email || !response.question) return
    this.postToFirebase(response)
  }

  postToFirebase = async (response) => {
    const url = 'https://roses-daycare.firebaseio.com/contact.json'
    try {
      let data = await fetch(url, {
        body: JSON.stringify(response),
        headers: {'Content-Type': 'application/json'},
        method: 'POST'
      })
      this.setState({
        name: '',
        email: '',
        question: 'Thank you, we will get back to you soon :)'
      })
    }
    catch (e) {
      this.setState({name: 'Oops... an error ocurred, could you please send us an email?'})
      console.error(this.props.url, e)
    }
  }

  render () {
    return (
      <form className={styles.form  + " " + this.props.className}>
        <label className={styles.item}>Name
          <input className={styles.field}
                name="name"
                type="text"
                value={this.state.name}
                onChange={this.handleChange} />
        </label>
        <label className={styles.item}>Email
          <input className={styles.field}
                name="email"
                type="text"
                value={this.state.email}
                onChange={this.handleChange} />
        </label>
        <label className={styles.item}>Question(s)
          <textarea className={styles.field}
                    name="question"
                    value={this.state.question}
                    onChange={this.handleChange}/>
        </label>
        <button className={styles.submit} onClick={this.handleSubmit}>SEND</button>
      </form>
    )
  }
}
