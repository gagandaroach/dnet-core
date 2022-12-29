export const state = () => ({});

export const mutations = {};

export const actions = {
  async nuxtServerInit({ dispatch }, { req }) {
	  return null
    console.log("index.js::nuxtServerInit()");
    await dispatch('hits/nuxtServerInit', { req })
  }
};
