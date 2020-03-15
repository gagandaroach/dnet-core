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
    const NO_ID_SET_VALUE = -12
    if (id === NO_ID_SET_VALUE) { return 'Welcome to Daroach.net' } else { return 'Welcome back to Daroach.net' }
  }
}
