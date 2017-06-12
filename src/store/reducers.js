import {FETCH_CONTENT} from './actions'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONTENT:
      return action.payload
    default:
      return state
  }
}
