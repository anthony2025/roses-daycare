const FETCH_CONTENT = 'FETCH_CONTENT'
const POST_QUESTION = 'POST_QUESTION'

export const fetchContent = (dispatch, getState) => ({type: FETCH_CONTENT})
export const postQuestion = (dispatch, getState) => ({type: POST_QUESTION})
