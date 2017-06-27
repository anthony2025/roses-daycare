import {get as getFromDatabase} from 'services/database'

export const UPDATE_CONTENT = 'UPDATE_CONTENT'

export const updateContent = (dispatch, getState) => {
  const url = process.env.REACT_APP_DATABASE_URL + 'content.json'
  getFromDatabase(url, data => {
    if (data) dispatch({type: UPDATE_CONTENT, payload: data})
  })
}
