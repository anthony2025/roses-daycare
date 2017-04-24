import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.css'

export default function Navbar ({className}) {
  return (
    <div className={styles.navbar + ' ' + className}>
      <NavLink exact to='/'
        className={styles.item}
        activeClassName={styles.active}>Home</NavLink>
      <NavLink to='/about'
        className={styles.item}
        activeClassName={styles.active}>About</NavLink>
      <NavLink to='/gallery'
        className={styles.item}
        activeClassName={styles.active}>Gallery</NavLink>
      <NavLink to='/blog'
        className={styles.item}
        activeClassName={styles.active}>Blog</NavLink>
      <NavLink to='/contact'
        className={styles.item}
        activeClassName={styles.active}>Contact</NavLink>
    </div>
  )
}
