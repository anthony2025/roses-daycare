import React from 'react'
import styles from './App.css'

import {REPOSITORY} from 'src/utils/constants'

import GithubCorner from 'src/components/GithubCorner/GithubCorner'
import Header from 'src/components/Header/Header'
import MainSection from 'src/components/MainSection/MainSection'
import Footer from 'src/components/Footer/Footer'

export default function App() {
  return (
    <div className={styles.app}>
      <GithubCorner
        repository={REPOSITORY}
        bgColor="white"
        mainColor="#F2787A"
      />
      <Header className={styles.header} />
      <MainSection className={styles.mainSection} />
      <Footer className={styles.footer} />
    </div>
  )
}
