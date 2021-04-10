// param is context
export default function ({ $axios, route, req }) {
  return $axios.post('hits?api-key=apikey', {
    site: req.headers.host,
    route: route.path
  }, { })
}
