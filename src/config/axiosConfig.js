import axios from 'axios'

axios.defaults.baseURL = 'https://newsapi.org/v2'

axios.interceptors.request.use(config => {
  config.params.apiKey = '91790df902304fa8a9a401a1d76dbc81'
  return config
}, error => {
  // Do something with request error
  return Promise.reject(error)
})
