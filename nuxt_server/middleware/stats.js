// import axios from 'axios'

export default function ({ $axios, route }) {
  return $axios.post('hit', {
    page: route.path
  }, { })
}
