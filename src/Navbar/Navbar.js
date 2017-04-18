import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navbar.css'

export default props => (
  <div class={styles.navbar + ' ' + props.parentStyles}>
    <NavLink to='/'
      class={styles.item}
      activeClassName='active'>Home</NavLink>
    <NavLink to='/about'
      class={styles.item}
      activeClassName='active'>About</NavLink>
    <NavLink to='/gallery'
      class={styles.item}
      activeClassName='active'>Gallery</NavLink>
    <NavLink to='/blog'
      class={styles.item}
      activeClassName='active'>Blog</NavLink>
    <NavLink to='/contact'
      class={styles.item}
      activeClassName='active'>Contact</NavLink>
  </div>
)

// activeClassName='active'
