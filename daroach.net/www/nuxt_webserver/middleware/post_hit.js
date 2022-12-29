// param is context
export default function ({ $axios, route, req }) {
  return null
  const new_Hit_data = {
    host: req != undefined ? req.headers.host : window.location.host,
    route: route.path
  }
  return $axios.post('hits?api-key=apikey', new_Hit_data, { })
}
