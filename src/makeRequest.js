import axios from 'axios'

const makeRequest = (type, url, params) => {
  const token = localStorage.getItem('token')
  const authorizationHeader = { headers: { Authorization: `Bearer ${token}` } }

  let lastArguments = []

  if (type === 'get') {
    lastArguments = [authorizationHeader]
  } else {
    lastArguments = [params, authorizationHeader]
  }

  return axios[type](url, ...lastArguments)
}

export default makeRequest
