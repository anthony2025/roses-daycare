import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from 'components/Avatar'

Home.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  people: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired
    })
  ).isRequired,
  modalOpenHandler: PropTypes.func
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 700px) {
      padding: 10px 10%;
    }
    @media (max-width: 700px) {
      padding: 10px 6%;
    }
`

const Paragraphs = styled.div`
    text-align: left;
    line-height: 1.3;
    font-family: Avenir Next;
    color: ${props => props.theme.primary};
    font-size: 19px;
    @media (max-width: 700px) {
      margin: 0 5% 30px 5%;
    }
    @media (min-width: 700px) {
      margin: 0 22% 25px 22%;
    }
`

const Avatars = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const StyledAvatar = styled(Avatar)`
    @media (min-width: 700px) {
      width: 16vw;
      height: 16vw;
      margin: 0 15px 50px 5px;
    }
    @media (max-width: 700px) {
      flex: 1;
      width: 35vw;
      height: 35vw;
      margin-bottom: 50px;
    }
`

export default function Home({paragraphs, people, ...props}) {
  return (
    <Wrapper className={props.className}>
      <Paragraphs>
        {paragraphs && paragraphs.map((p, index) => <p key={index}>{p}</p>)}
      </Paragraphs>

      <Avatars>
        {people && Object.keys(people).map(key =>
          <StyledAvatar
            image={people[key].image}
            name={people[key].name}
            subtitle={people[key].subtitle}
            border={3}
            onClick={props.modalOpenHandler(key)}
            key={key}
          />
        )}
      </Avatars>
    </Wrapper>
  )
}
