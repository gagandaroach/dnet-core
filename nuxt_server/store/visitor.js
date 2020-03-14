export const state = () => ({
  visitorID: -1
})

export const mutations = {
  set (state, vID) {
    state.visitorID = vID
  }
}
