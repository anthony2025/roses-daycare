import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'
import {updateContent} from './actions'
import {get as loadFromCache, post as saveToCache} from 'services/localStorage'

export default () => {
  let store = createStore(
    rootReducer,
    loadFromCache(),
    composeWithDevTools(applyMiddleware(thunk), applyMiddleware(logger))
  )
  store.subscribe(() => saveToCache(store.getState()))
  store.dispatch(updateContent)
  return store
}
