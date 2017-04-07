import React, { Component } from 'react'
import 'styles/CardDiscover.css'

const file = 'discover/1img.jpg'
const genre = 'Discover'

export default class CardDiscover extends Component {
  render () {
    return (
      <div className='card'>
        <img className='photo' src={file} alt={genre} />
        <p className='label'>{genre}</p>
      </div>
    )
  }
}
