import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {connect} from 'react-redux'
import {getArticles} from 'store/selectors'

import Title from 'components/Title/Title'
import Article from './Article/Article'

News.propTypes = {
  articles: PropTypes.object.isRequired
}

const Wrapper = styled.div`
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
      <Title title={props.title} subtitle={props.subtitle} />

      {Object.keys(props.articles).map(key =>
        <Article
          title={props.articles[key].title}
          image={props.articles[key].image}
          text={props.articles[key].text}
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
