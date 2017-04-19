import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.css'

export default props => (
  <div class={styles.navbar + ' ' + props.parentStyles}>
    <NavLink exact to='/'
      class={styles.item}
      activeClassName={styles.active}>Home</NavLink>
    <NavLink to='/about'
      class={styles.item}
      activeClassName={styles.active}>About</NavLink>
    <NavLink to='/gallery'
      class={styles.item}
      activeClassName={styles.active}>Gallery</NavLink>
    <NavLink to='/blog'
      class={styles.item}
      activeClassName={styles.active}>Blog</NavLink>
    <NavLink to='/contact'
      class={styles.item}
      activeClassName={styles.active}>Contact</NavLink>
  </div>
)

// activeClassName='active'
