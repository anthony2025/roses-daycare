import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Article from 'components/Article'

News.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      text: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  ).isRequired
}

// TODO: change this to width
const Articles = styled.div`
    margin-bottom: 60px;
    @media (max-width: 700px) {
      padding: 40px 5%;
    }
    @media (min-width: 700px) {
      padding: 40px 22%;
    }
`

const Link = styled.div`
  font-size: 12px;
`

export default function News(props) {
  return (
    <div>
      <Articles>
        {props.articles.map(article =>
          <Article
            title={article.title}
            image={article.image}
            text={article.text}
            key={article.id}
          />
        )}
      </Articles>

      <Link>
        Our very own blog will be coming soon.
      </Link>
    </div>
  )
}
