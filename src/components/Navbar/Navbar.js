import React from 'react'
import styles from './Navbar.css'

import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink
        exact
        to="/"
        className={styles.item}
        activeClassName={styles.activeItem}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={styles.item}
        activeClassName={styles.activeItem}
      >
        About
      </NavLink>
      <NavLink
        to="/gallery"
        className={styles.item}
        activeClassName={styles.activeItem}
      >
        Gallery
      </NavLink>
      <NavLink
        to="/news"
        className={styles.item}
        activeClassName={styles.activeItem}
      >
        News
      </NavLink>
      <NavLink
        to="/contact"
        className={styles.item}
        activeClassName={styles.activeItem}
      >
        Contact
      </NavLink>
    </div>
  )
}
