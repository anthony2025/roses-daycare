import React from 'react'
import NoMatch from './NoMatch.js'
import renderer from 'react-test-renderer'

test('adds 1 + 2 to equal 3', () => {
  expect(1 + 2).toBe(3)
})

test('renders correctly', () => {
  const tree = renderer.create(<NoMatch></NoMatch>).toJSON()
  expect(tree).toMatchSnapshot()
})
