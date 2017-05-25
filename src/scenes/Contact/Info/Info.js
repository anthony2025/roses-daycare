import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './Info.css'

import getContent from 'src/services/getFromFirebase'

export default class Info extends Component {
  state = {
    info: []
  }

  componentDidMount () {
    const contentUrl = 'https://roses-daycare.firebaseio.com/data/info.json'
    getContent(contentUrl, (data) => {
      this.setState({
        info: data
      })
    })
  }

  render () {
    return (
      <div className={styles.info + ' ' + this.props.className}>
        <div className={styles.item}>
          <div className={styles.subtitle}>EMAIL</div>
          <div className={styles.field}>{this.state.info.email}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>PHONE</div>
          <div className={styles.field}>{this.state.info.phone}</div>
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>ADDRESS</div>
          <div className={styles.field}>
            {this.state.info.address1}
            <br />
            {this.state.info.address2}
          </div>
        </div>
        <div className={styles.item}>
          <div className={styles.subtitle}>FACEBOOK</div>
          <div className={styles.field}>{this.state.info.facebook}</div>
        </div>
      </div>
    )
  }
}
