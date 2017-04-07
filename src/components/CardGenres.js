import React, { Component } from 'react'
import 'styles/CardGenres.css'

const file = 'genres/Blues.jpg'
const genre = 'Blues'

export default class CardGenres extends Component {
  render () {
    return (
      <div className='card'>
        <img className='photo' src={file} alt={genre} />
        <p className='label'>{genre}</p>
      </div>
    )
  }
}
