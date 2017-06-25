import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Avatar from 'components/Avatar'

Home.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  people: PropTypes.objectOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired
    })
  ).isRequired
}

const Wrapper = styled.div`
    @media (min-width: 700px) {
      padding: 40px 10%;
    }
    @media (max-width: 700px) {
      padding: 40px 5%;
    }
`

const Paragraphs = styled.div`
    text-align: left;
    line-height: 1.3;
    font-family: Avenir Next;
    color: ${props => props.theme.primary};
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
      margin: 10px 0;
    }
`

export default function Home(props) {
  return (
    <Wrapper className={props.className}>
      <Paragraphs>
        {props.paragraphs.map((p, index) => <p key={index}>{p}</p>)}
      </Paragraphs>

      <Avatars>
        {Object.keys(props.people).map(key =>
          <StyledAvatar
            img={props.people[key].img}
            name={props.people[key].name}
            subtitle={props.people[key].subtitle}
            key={key}
          />
        )}
      </Avatars>
    </Wrapper>
  )
}
