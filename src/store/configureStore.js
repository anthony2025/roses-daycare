import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import rootReducer from './reducers'
import {fetchContent} from './actions'
import {
  get as loadFromCache,
  post as saveToCache
} from 'src/services/localStorage'

export default () => {
  let store = createStore(
    rootReducer,
    loadFromCache(),
    composeWithDevTools(applyMiddleware(thunk), applyMiddleware(logger))
  )
  store.subscribe(() => saveToCache(store.getState()))
  store.dispatch(fetchContent)
  return store
}
