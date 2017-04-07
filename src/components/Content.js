import React, { Component } from 'react'
import _ from 'lodash'
import styles from 'styles/Content.css'
import CardDiscover from 'components/CardDiscover.js'
import CardGenres from 'components/CardGenres.js'

export default class Content extends Component {
  render () {
    return (
      <div className={styles.content}>
        <div className={styles.section}>
          {_.times(6, () => <CardDiscover key={Math.random()} />)}
        </div>
        <div className={styles.section}>
          {_.times(35, () => <CardGenres key={Math.random()} />)}
        </div>
      </div>
    )
  }
}
