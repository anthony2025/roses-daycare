import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import image from './404.jpg'

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
}

export default function NoMatch(props) {
  return (
    <Wrapper className={props.className}>
      <Text>
        No match for <code>{props.location.pathname}</code>
      </Text>
      <Image src={image} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.primary};
  padding: 50px;
`

const Image = styled.img`
  cursor: inherit;
  border-radius: 1px;
  object-fit: cover;
  width: 100%;
`

const Text = styled.div`color: ${props => props.theme.background};`
