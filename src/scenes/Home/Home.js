import React from 'react'
import styled from 'styled-components'

import PAGES from 'src/content/pages.json'
import IMAGES from 'src/content/images.json'

import Carousel from './Carousel/Carousel'
import Card from './Card/Card'

const Wrapper = styled.div`
    border: 6px solid white;
    background-color: white;
    padding: 1%;
`

const Cards = styled.div`
    display: flex;
    margin-top: 1vw;

    @media (max-width: 700px) {
      flex-direction: column;
    }
    @media (min-width: 700px) {
      flex-direction: row;
    }
`

export default function Home() {
  return (
    <Wrapper>
      <Carousel images={IMAGES} />

      <Cards>
        {PAGES.map(page =>
          <Card
            key={page.title}
            title={page.title}
            text={page.text}
            link={page.path}
          />
        )}
      </Cards>
    </Wrapper>
  )
}
