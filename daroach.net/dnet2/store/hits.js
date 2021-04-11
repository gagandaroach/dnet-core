export const state = () => ({
    hits: []
})

export const mutations = {
    SET_HITS(state, value) {
        state.hits = value
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }) {
        console.log("hits.js::nuxtServerInit()")
        const hits = (await this.$axios.get('/hits/test.bash.sh?api-key=apikey')).data;
        await dispatch('hits/setHits', hits);
    },
    setHits: ({ commit, state }, newValue) => {
        commit('SET_HITS', newValue)
        return state.hits
    },
}
