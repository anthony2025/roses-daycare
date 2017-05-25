import checkServerResponse from './checkServerResponse'

export default (url, callback) => {
  return fetch(url)
    .then(response => checkServerResponse(response))
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => {throw error})
}
