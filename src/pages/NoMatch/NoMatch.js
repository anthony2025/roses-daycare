import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
}

const Wrapper = styled.div`
    background-color: white;
`

const Title = styled.div`
    color: #666;
`

const Image = styled.img`
    width: 100%;
`

export default function NoMatch (props) {
  return (
    <Wrapper>
      <Title>
        No match for <code>{props.location.pathname}</code>
      </Title>
      <Image src={process.env.PUBLIC_URL + '404.jpg'} />
    </Wrapper>
  )
}
