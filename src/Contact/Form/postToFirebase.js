export default async (data, url) => {
  try {
    checkResponse(await fetch(url, {
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
    }))
    alert('Thank you, we will get back to you soon :)')
  }
  catch (e) {
    alert ('Oops... an error ocurred .-. could you please send us an email?')
    console.error(this.props.url, e)
  }
}

const checkResponse = (response) => {
  if (response.ok) {
    console.log('no errors with the server response :)')
    return response
  }
  let error = new Error(response.statusText)
  error.response = response
  throw error
}
