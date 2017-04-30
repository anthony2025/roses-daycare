import React, {Component} from 'react'
import PropTypes from 'prop-types'
import styles from './News.css'

import ViewCard from 'src/shared/ViewCard'
import Article from './Article'

export default class News extends Component {
  articles = [
    {
      title: 'Making Homemade Clay',
      image: 'img/6img.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
      title: 'Hopscotch Championship',
      image: 'img/4img.jpg',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  ]

  static propTypes = {
    className: PropTypes.string
  }

  render () {
    return (
      <ViewCard
        bgColor='red'
        title='Weekly Stories'
        subtitle='WHAT WE ARE UP TO'
      >
        {this.articles.map(article => (
          <Article
            className={styles.article}
            title={article.title}
            image={article.image}
            text={article.text}
            key={article.title}
          />
        ))}
        <div className={styles.link}>Our own blog will be coming soon.</div>
      </ViewCard>
    )
  }
}
