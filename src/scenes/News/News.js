import React from 'react'
import styles from './News.css'

import Title from 'src/core/Title'
import Article from './Article'

const articles = [
  {
    title: 'Making Homemade Clay',
    image: require('assets/stock/img4.jpg'),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    title: 'Hopscotch Championship',
    image: require('assets/stock/img6.jpg'),
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

export default function News () {
  return (
    <div className={styles.news}>
      <Title title='News' subtitle="SEE WHAT WE'RE UP TO" />
      <div className={styles.articles}>
        {articles.map(article => (
          <Article
            className={styles.article}
            title={article.title}
            image={article.image}
            text={article.text}
            key={article.title}
          />
        ))}
      </div>
      <div className={styles.link}>Our own blog will be coming soon.</div>
    </div>
  )
}
