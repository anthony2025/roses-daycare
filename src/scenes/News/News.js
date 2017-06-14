import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {connect} from 'react-redux'
import {getArticles} from 'src/store/selectors'
import mapObject from 'src/utils/mapObject'

import Title from 'src/components/Title/Title'
import Article from './Article/Article'

News.propTypes = {
  articles: PropTypes.object.isRequired
}

const Wrapper = styled.div`
    background-color: ${props => props.theme.red};
    border: 6px solid white;

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

function News(props) {
  return (
    <Wrapper>
      <Title title="News" subtitle="SEE WHAT WE'RE UP TO" />

      {mapObject(props.articles, (key, article) =>
        <Article
          title={article.title}
          image={article.image}
          text={article.text}
          key={key}
        />
      )}

      <Link>
        Our very own blog will be coming soon.
      </Link>
    </Wrapper>
  )
}

const mapStateToProps = state => ({
  articles: getArticles(state)
})

export default connect(mapStateToProps)(News)
