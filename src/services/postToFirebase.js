import checkServerResponse from './checkServerResponse'

export default async (data, url) => {
  try {
    checkServerResponse(await fetch(url, {
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
    }))
    alert('Thank you, we will get back to you soon :)')
  } catch (error) {
    alert('Oops... an error ocurred .-. could you please send us an email?')
    console.error(error)
  }
}
