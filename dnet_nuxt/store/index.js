export const state = () => ({
  navbar_hidden: false
})

export const mutations = {
  hideNavbar (state) {
    state.navbar_hidden = true
  },
  showNavbar (state) {
    state.navbar_hidden = false
  }
}
