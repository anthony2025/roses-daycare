import React from 'react'
import styled from 'styled-components'

import people from 'content/people.json'
import paragraphs from 'content/about.json'

import Title from 'components/Title/Title'
import Avatar from 'components/Avatar/Avatar'

const Wrapper = styled.div`
    padding: 40px 1%;
`

const Paragraphs = styled.div`
    text-align: left;
    line-height: 1.3;
    font-family: Avenir Next;
    @media (max-width: 700px) {
      font-size: 14px;
      margin: 0 5% 30px 5%;
    }
    @media (min-width: 700px) {
      font-size: 19px;
      margin: 0 22% 25px 22%;
    }
`

const Avatars = styled.div`
    margin: 40px 25px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 700px) {
      flex-direction: column;
    }
    @media (min-width: 700px) {
      flex-direction: row;
    }
`

export default function About(props) {
  return (
    <Wrapper>
      <Title title={props.title} subtitle={props.subtitle} />

      <Paragraphs>
        {Object.keys(paragraphs).map(key =>
          <p key={key}>{paragraphs[key]}</p>
        )}
      </Paragraphs>

      <Avatars>
        {Object.keys(people).map(key =>
          <Avatar
            img={process.env.PUBLIC_URL + people[key].img}
            name={people[key].name}
            subtitle={people[key].subtitle}
            key={key}
          />
        )}
      </Avatars>
    </Wrapper>
  )
}
