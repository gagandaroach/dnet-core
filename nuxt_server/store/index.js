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
    if (id === NO_ID_SET_VALUE) { return 'Welcome to Daroach.net' } else { return 'Welcome back to Daroach.net' }
  }
}

export const actions = {
  async nuxtServerInit ({ dispatch, context }) {
    const response = await this.$axios.get('https://api.daroach.net/visitor/count')
    dispatch('visitor/updateCount', parseInt(response.data.count))
  }
}
