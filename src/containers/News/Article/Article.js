import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from 'components/Avatar'

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    subtitle: PropTypes.string
  })
}

export default function Article(props) {
  return (
    <Wrapper className={props.className}>
      <Image src={props.image} />

      <div>
        <Title>
          {props.title && props.title.toUpperCase()}
        </Title>
        <Paragraph>
          {props.text}
        </Paragraph>
        <Metadata>
          <When>
            {props.date}
          </When>
          <Author image={props.author.image} onClick={props.onClick} />
        </Metadata>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.primary};
  font-family: Open Sans, Garamond;
  line-height: 1.4;
  font-size: 30px;
  display: flex;

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${props => props.theme.accent};
`

const Image = styled.img`
  cursor: inherit;
  border-radius: 1px;
  object-fit: cover;
  border: 3px solid ${props => props.theme.primary};
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (min-width: 800px) {
    max-width: 40%;
    margin-right: 30px;
  }
`

const Metadata = styled.div`
  display: flex;
  align-items: center;
`

const When = styled.div`
  font-size: 15px;
  margin: 0 10px 0 auto;
`

const Author = styled(Avatar)`
  height: 40px;
  width: 40px;
`

const Paragraph = styled.div`
  text-align: left;

  @media (max-width: 800px) {
    font-size: 18px;
    margin: 0 10px;
  }
  @media (min-width: 800px) {
    font-size: 18px;
    margin: 0 30px;
  }
`
