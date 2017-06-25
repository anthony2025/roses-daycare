import {UPDATE_CONTENT} from './actions'
import initialState from './initialState'

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONTENT:
      return action.payload
    default:
      return state
  }
}
