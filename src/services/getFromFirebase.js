import checkServerResponse from './checkServerResponse'

export default async (data, url) => {
  try {
    const response = await fetch(url)
    checkServerResponse(response)
    return response
  } catch (error) {
    alert('Oops... an error ocurred .-.')
    console.error(error)
    return error
  }
}
