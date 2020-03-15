
// const COOKE_NAME = 'daroachnet_visitor_id'.toUpperCase()

export const state = () => ({
  visitorCount: -22222,
  visitorID: -1
})

export const mutations = {
  SET_ID (state, vID) {
    state.visitorID = vID
  },
  SET_COUNT (state, count) {
    state.visitorCount = count
  }
}

export const actions = {
  updateCount: ({ commit, state }, newValue) => {
    commit('SET_COUNT', newValue)
    return state.visitorCount
  },
  updateID: ({ commit, state }, newValue) => {
    commit('SET_ID', newValue)
    return state.visitorID
  }
}
