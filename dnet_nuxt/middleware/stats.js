// import axios from 'axios'

export default function ({ $axios, route }) {
  return $axios.post('hit', {
    url: route.fullPath,
    withCredentials: true
  }, {
    auth: {
      username: 'user',
      password: 'pass'
    }
  })
}
