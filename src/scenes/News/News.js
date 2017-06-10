import React, {Component} from 'react'
import styles from './News.css'

import {connect} from 'react-redux'
import {getArticles} from 'src/store/selectors'
import mapObject from 'src/utils/mapObject'

import Title from 'src/components/Title/Title'
import Article from './Article/Article'

function News(props) {
  return (
    <div className={styles.news}>
      <Title title="News" subtitle="SEE WHAT WE'RE UP TO" />
      <div className={styles.articles}>
        {mapObject(props.articles, (key, article) =>
          <Article
            className={styles.article}
            title={article.title}
            image={article.image}
            text={article.text}
            key={key}
          />
        )}
      </div>
      <div className={styles.link}>
        Our own blog will be coming soon.
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  articles: getArticles(state)
})

export default connect(mapStateToProps)(News)
