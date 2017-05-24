import React from 'react'
import {render} from 'react-dom'

import styles from './index.css'
import './global.css'

import {BrowserRouter} from 'react-router-dom'

import GithubCorner from 'src/core/GithubCorner/GithubCorner'
import Header from 'src/core/Header/Header'
import MainSection from 'src/core/MainSection/MainSection'
import Footer from 'src/core/Footer/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <GithubCorner
          repository='https://github.com/anthony2025/roses-daycare'
          bgColor='white'
          mainColor='#F2787A'
        />
        <Header className={styles.header} />
        <MainSection className={styles.mainSection} />
        <Footer className={styles.footer} />
      </div>
    </BrowserRouter>
  )
}

render(
  <App />,
  document.querySelector('#app')
)
