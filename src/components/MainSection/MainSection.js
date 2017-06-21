import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import RouteWithProps from 'utils/RouteWithProps'
import {Switch} from 'react-router-dom'

MainSection.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      exact: PropTypes.bool,
      component: PropTypes.func.isRequired,
      path: PropTypes.string
    }).isRequired
  ).isRequired
}

const Wrapper = styled.div`
      padding: 40px 2%;
  `

export default function MainSection(props) {
  return (
    <Wrapper>
      <Switch>
        {console.log('text', props.text)}
        {props.pages.map(page =>
          <RouteWithProps
            exact={page.exact}
            key={page.component}
            path={page.path}
            component={page.component}
          />
        )}
      </Switch>
    </Wrapper>
  )
}
