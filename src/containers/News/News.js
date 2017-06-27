import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Article from './Article'

News.propTypes = {
  articles: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    text: PropTypes.string,
    date: PropTypes.string,
    id: PropTypes.string
  })
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
    padding-bottom: 15px;
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
        {Object.keys(articles).length >= 0 &&
          Object.keys(articles).map(key =>
            <StyledArticle
              title={articles[key].title}
              image={articles[key].image}
              text={articles[key].text}
              date={articles[key].date}
              onClick={props.modalOpenHandler(articles[key].author)}
              author={articles[key].author}
              key={key}
            />
          )}
      </Articles>

      <Link>
        Our very own blog will be coming soon.
      </Link>
    </div>
  )
}
