import {get as getFromDatabase} from 'services/database'
import {DATABASE_URL} from 'store/constants'

export const FETCH_CONTENT = 'FETCH_CONTENT'

export const fetchContent = (dispatch, getState) => {
  const url = DATABASE_URL + 'content.json'
  getFromDatabase(url, data => {
    dispatch({type: FETCH_CONTENT, payload: data})
  })
}
