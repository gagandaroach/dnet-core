// param is context
export default function ({ $axios, route }) {
  return $axios.post('hits?api-key=apikey', {
    site: route.fullPath,
    route: route.path
  }, { })
}
