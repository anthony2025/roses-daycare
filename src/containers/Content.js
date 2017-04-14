import React, { Component } from 'react'
import styles from 'styles/Content.css'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Carrousel from 'components/Carrousel.js'
import ColorfulCards from 'components/ColorfulCards.js'

export default class Content extends Component {
  render () {
    return (
      <div class={styles.content  + " " + this.props.parentStyles}>
        <Carrousel parentStyles={styles.carrousel}/>
        <ColorfulCards parentStyles={styles.colorfulCards}/>
      </div>
    )
  }
}
