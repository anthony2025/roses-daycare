import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from 'components/Image'
import Avatar from 'components/Avatar'

Article.propTypes = {
  title: PropTypes.string,
  date: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  author: PropTypes.string
}

const Wrapper = styled.div`
  text-align: center;
  color: ${props => props.theme.primary};
  font-family: SignikaLight;
  line-height: 1.5;
  font-size: 30px;
  display: flex;

  @media (min-width: 700px) {
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`

const Title = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
  color: ${props => props.theme.accent};
`

const StyledImage = styled(Image)`
  height: 100%;
  border: 3px solid ${props => props.theme.primary};
  @media (max-width: 700px) {
    width: 100%;
    margin-bottom: 10px;
  }

  @media (min-width: 700px) {
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
  line-height: 1.25;

  @media (max-width: 700px) {
    font-size: 15px;
  }
  @media (min-width: 700px) {
    font-size: 20px;
  }
`

export default function Article(props) {
  return (
    <Wrapper className={props.className}>
      <StyledImage src={props.image} />

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
