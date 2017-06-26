import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Article from './Article'

News.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string,
      text: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    })
  )
}

const Articles = styled.div`
    @media (min-width: 700px) {
      padding: 40px 10%;
    }
    @media (max-width: 700px) {
      padding: 10px 7%;
    }
`

const StyledArticle = styled(Article)`
    margin-bottom: 45px;
    padding-bottom: 10px;
    border-bottom: 1px solid ${props => props.theme.primary}
`

const Link = styled.div`
    color: ${props => props.theme.primary};
    font-size: 12px;
`

export default function News({articles, ...props}) {
  return (
    <div className={props.className}>

      <Articles>
        {articles && articles.map(article =>
          <StyledArticle
            title={article.title}
            image={article.image}
            text={article.text}
            date={article.date}
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
