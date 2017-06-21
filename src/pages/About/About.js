import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from 'components/Avatar'

About.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  people: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
}

const Paragraphs = styled.div`
    text-align: left;
    line-height: 1.3;
    font-family: Avenir Next;
    color: ${props => props.theme.text};
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
    margin: 40px 25px 10px 25px;
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

const StyledAvatar = styled(Avatar)`
    @media (max-width: 700px) {
      margin: 20px 0;
    }
`

export default function About(props) {
  return (
    <div>
      <Paragraphs>
        {props.paragraphs.map((p, index) => <p key={index}>{p}</p>)}
      </Paragraphs>

      <Avatars>
        {props.people.map(person =>
          <StyledAvatar
            img={process.env.PUBLIC_URL + person.img}
            name={person.name}
            subtitle={person.subtitle}
            key={person.id}
          />
        )}
      </Avatars>
    </div>
  )
}
