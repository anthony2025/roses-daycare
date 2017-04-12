import React, { Component } from 'react'
import styles from 'styles/Footer.css'

export default class Footer extends Component {
  render () {
    return (
      <div class={styles.footer}>
        <span class={styles.text}>
          Rose's Day Care LLC, 2017
          <br />
          made with ♥ by anthonyascencio.me
        </span>
      </div>
    )
  }
}
