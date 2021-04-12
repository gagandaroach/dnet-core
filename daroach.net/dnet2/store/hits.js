export const state = () => ({
  list: []
});

export const mutations = {
  SET_HITS(state, value) {
    state.list = value;
  }
};

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
    console.log("hits.js::nuxtServerInit()");
    const uri = `/hits/${req.headers.host}?api-key=apikey`;
    const hits = (await this.$axios.get(uri)).data;
    return await dispatch("setHits", hits);
  },
  setHits: async ({ commit, state }, newValue) => {
    await commit("SET_HITS", newValue);
    return state.list;
  }
};

export const getters = {
  getRoutes: (state) => {
    return [...new Set(state.list.map(hit => hit.route))]
  },
  getRouteHits: (state) => (route) => {
    return state.list.filter((hit) => hit.route == route);
  },
  getPageCount: (state, getters, rootState) => (route) => {
    return getters.getRouteHits(route).length
  },
  getPageCounts: (state, getters, rootState) => (routes, incOther = false) => {
    console.log('hits.js::getPageCounts()')
    if (!incOther) return routes.map(route => getters.getPageCount(route));
    let allRoutes = getters.getRoutes;
    let allCounts = allRoutes.map((route) => getters.getPageCount(route));
    return allCounts;
  }
};

// let data = [{
//     _id: '60729d2ca987c410bc575a91',
//     host: 'localhost:3000',
//     route: '/home',
//     date: '2021-04-11T06:54:36.241Z',
//     __v: 0
//   },
//   {
//     _id: '60729d31a987c410bc575a92',
//     host: 'localhost:3000',
//     route: '/asdfasdf',
//     date: '2021-04-11T06:54:41.716Z',
//     __v: 0
//   },
//   {
//     _id: '60729d38a987c410bc575a93',
//     host: 'localhost:3000',
//     route: '/',
//     date: '2021-04-11T06:54:48.159Z',
//     __v: 0
//   }]
