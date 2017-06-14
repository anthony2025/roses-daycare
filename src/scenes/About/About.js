import React from 'react'
import styled from 'styled-components'

import PEOPLE from 'src/content/people.json'
import PARAGRAPHS from 'src/content/about.json'

import Title from 'src/components/Title/Title'
import Avatar from 'src/components/Avatar/Avatar'

const Wrapper = styled.div`
    background-color: ${props => props.theme.red};
    padding: 40px 1%;
    border: 6px solid white;
`

const Paragraph = styled.div`
    text-align: left;
    line-height: 1.3;
    font-weight: 200;

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

export default function About() {
  return (
    <Wrapper>
      <Title title="About Us" subtitle="OUR STORY" />

      {PARAGRAPHS.map(paragraph =>
        <Paragraph key={paragraph}>{paragraph}</Paragraph>
      )}

      <Avatars>
        {PEOPLE.map(person =>
          <Avatar
            img={person.img}
            name={person.name}
            subtitle={person.subtitle}
            key={person.name}
          />
        )}
      </Avatars>
    </Wrapper>
  )
}
