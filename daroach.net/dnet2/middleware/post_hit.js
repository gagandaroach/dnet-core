// param is context
export default function ({ $axios, route, req }) {
  return $axios.post('hits?api-key=apikey', {
    host: req != undefined ? req.headers.host : window.location.host,
    route: route.path
  }, { })
}
