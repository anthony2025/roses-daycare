export default function checkServerResponse (response) {
  if (response.ok) {
    console.log('no errors with the server response :)')
    return response
  }
  let error = new Error(response.statusText)
  error.response = response
  throw error
}
