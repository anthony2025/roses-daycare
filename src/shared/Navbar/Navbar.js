import React from 'react'
import PropTypes from 'prop-types'
import styles from './Navbar.css'
import {NavLink} from 'react-router-dom'

Navbar.propTypes = {
  className: PropTypes.string
}
export default function Navbar ({className}) {
  return (
    <div className={styles.navbar + ' ' + className}>
      <NavLink exact to='/'
        className={styles.item}
        activeClassName={styles.active}>
        Home
      </NavLink>
      <NavLink to='/about'
        className={styles.item}
        activeClassName={styles.active}>
        About
      </NavLink>
      <NavLink to='/gallery'
        className={styles.item}
        activeClassName={styles.active}>
        Gallery
      </NavLink>
      <NavLink to='/news'
        className={styles.item}
        activeClassName={styles.active}>
        News
      </NavLink>
      <NavLink to='/contact'
        className={styles.item}
        activeClassName={styles.active}>
        Contact
      </NavLink>
    </div>
  )
}
