export const state = () => ({
  counter: 0
})

export const mutations = {
  increment (state) {
    state.counter++
  }
}

export const getters = {
  welcome: (state) => {
    const id = state.visitor.visitorID
    const NO_ID_SET_VALUE = -1 // value of a unset visitor id
    if (id === NO_ID_SET_VALUE) { return 'Welcome to Daroach.net' } else { return 'Welcome back #' + id }
  },
  description: (state) => {
    const id = state.visitor.visitorID
    const NO_ID_SET_VALUE = -1 // value of a unset visitor id
    const text = 'You are one of ' + state.visitor.visitorCount + ' visitors who have connected to daroach.net'
    if (id === NO_ID_SET_VALUE) { return '' } else { return text }
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch, context }) {
    const cookieRes = this.$cookies.get('DNET_VISITOR_ID')
    if (cookieRes === undefined) {
      dispatch('visitor/hideAlert', false)
    } else {
      dispatch('visitor/hideAlert', true)
      dispatch('visitor/updateID', parseInt(cookieRes))
    }
    const response = await this.$axios.get('https://api.daroach.net/visitor/count')
    dispatch('visitor/updateCount', parseInt(response.data.count))
  }
}
