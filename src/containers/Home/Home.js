import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import appear from 'styling/appearAnimation'
import Avatar from 'components/Avatar'

Home.propTypes = {
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  people: PropTypes.objectOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      subtitle: PropTypes.string
    })
  ),
  modalOpenHandler: PropTypes.func
}

export default function Home({paragraphs, people, ...props}) {
  return (
    <Wrapper className={props.className}>
      <Paragraphs>
        {paragraphs &&
          paragraphs.map((p, index) =>
            <p key={index}>
              {p}
            </p>
          )}
      </Paragraphs>

      <Avatars>
        {people &&
          Object.keys(people)
            .reverse()
            .map(key =>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 700px) {
    padding: 10px 10% 20px 10%;
  }
  @media (max-width: 700px) {
    padding: 10px 6%;
  }
  animation: ${appear} .9s ease;
`

const Paragraphs = styled.div`
  text-align: left;
  line-height: 1.4;
  font-family: Avenir Next;
  color: ${props => props.theme.primary};
  font-size: 19px;
  @media (max-width: 1000px) {
    margin: 0 5% 30px 5%;
  }
  @media (min-width: 1000px) {
    margin: 0 25% 25px 25%;
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
    flex: 1 0 auto;
    width: 35vw;
    height: 35vw;
    margin-bottom: 50px;
  }
  -webkit-tap-highlight-color: rgba(0,0,0,0);
`
