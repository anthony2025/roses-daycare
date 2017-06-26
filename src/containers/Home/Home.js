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
      width: 15vw;
      height: 15vw;
      margin: 0 10px 50px 10px;
    }
    @media (max-width: 700px) {
      flex: 1;
      width: 35vw;
      height: 35vw;
      margin-bottom: 50px;
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
