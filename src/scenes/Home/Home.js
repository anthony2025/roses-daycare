import React from 'react'
import styled from 'styled-components'

import pages from 'content/pages.json'
import IMAGES from 'content/images.json'

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

const FilteredPages = Object.keys(pages)
  .filter(key => !['noMatch', 'home'].includes(key))
  .reduce((acc, curr) => ({...acc, [curr]: pages[curr]}), {})

export default function Home() {
  return (
    <Wrapper>
      <Carousel images={IMAGES} />

      <Cards>
        {Object.keys(FilteredPages).map(key =>
          <Card
            key={key}
            title={pages[key].longTitle}
            text={pages[key].description}
            path={pages[key].path}
          />
        )}
      </Cards>
    </Wrapper>
  )
}
