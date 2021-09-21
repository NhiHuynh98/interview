import _ from 'lodash'

function api (url, _method = 'GET', data = {}) {
  const method = _.upperCase(_method)
  const headers = {
    'Content-Type': 'application/json;charset=utf-8',
  }
  switch (method) {
    case 'POST':
    case 'PUT':
    case 'DELETE':
      return fetch(url, {
        method,
        headers,
        body: JSON.stringify(data),
      })
        .then(response => {
          return response
        })
        .then(response => {
          return response.json()
        })
    case 'GET':
      return fetch(url, {
        method,
        headers,
      })
        .then(response => {
          return response
        })
        .then(response => {
          return response.json()
        })
    default:
      break
  }
}

export default api
