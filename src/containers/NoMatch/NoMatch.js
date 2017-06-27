import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Image from 'components/Image'

NoMatch.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
}

const Wrapper = styled.div`
    background-color: ${props => props.theme.primary};
    padding: 50px;
`

const Text = styled.div`
    color: ${props => props.theme.background};
`

export default function NoMatch (props) {
  return (
    <Wrapper className={props.className}>
      <Text>
        No match for <code>{props.location.pathname}</code>
      </Text>
      <Image src={process.env.PUBLIC_URL + '404.jpg'} />
    </Wrapper>
  )
}
