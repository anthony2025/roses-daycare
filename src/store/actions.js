import {get as getFromDatabase} from 'services/database'
import {DATABASE_URL} from 'services/constants'

export const UPDATE_CONTENT = 'UPDATE_CONTENT'

export const updateContent = (dispatch, getState) => {
  const url = DATABASE_URL + 'content.json'
  getFromDatabase(url, data => {
    if (data) dispatch({type: UPDATE_CONTENT, payload: data})
  })
}
