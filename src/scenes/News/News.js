import React, {Component} from 'react'
import styles from './News.css'

import getContent from 'src/services/getFromFirebase'

import Title from 'src/core/Title/Title'
import Article from './Article/Article'

export default class News extends Component {
  state = {
    articles: []
  }

  componentDidMount () {
    const peopleUrl = 'https://roses-daycare.firebaseio.com/data/news.json'
    getContent(peopleUrl, (data) => {
      this.setState({
        articles: data
      })
    })
  }

  render () {
    return (
      <div className={styles.news}>
        <Title title='News' subtitle="SEE WHAT WE'RE UP TO" />
        <div className={styles.articles}>
          {this.state.articles.map(article => (
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
}
