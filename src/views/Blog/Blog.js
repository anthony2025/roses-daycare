import React, {Component} from 'react'
import styles from './Blog.css'

import ViewCard from 'containers/ViewCard'

export default class Blog extends Component {
  render () {
    return (
      <ViewCard bgColor='red' title='Weekly Stories' subtitle='WHAT WE ARE UP TO'>
      </ViewCard>
    )
  }
}
