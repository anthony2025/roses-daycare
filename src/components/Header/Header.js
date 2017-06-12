import React from 'react'
import styles from './Header.css'

import {Link} from 'react-router-dom'

import Logo from 'src/components/Logo/Logo'
import Navbar from 'src/components/Navbar/Navbar'

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to="/">
        <Logo />
      </Link>
      <Navbar />
    </div>
  )
}
