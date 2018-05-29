require('isomorphic-fetch');
// We declare it here because otherwise it will be overriden by the build process.
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

const actions = {
  'GET_COLLECTION': async ({ commit, state }) => {
    const query = await fetch(`${state.BASE_URL}/api/collection`);
    const payload = await query.json();

    if (payload.ok) {
      return commit('SET_COLLECTION', payload)
    }
    // TOOD handle error
  },
  'GET_WANTLIST': async ({ commit, state }) => {
    const query = await fetch(`${state.BASE_URL}/api/wantlist`);
    const payload = await query.json();

    if (payload.ok) {
      return commit('SET_WANTLIST', payload)
    }
    // TOOD handle error
  },
  'GET_RELEASE': async ({ getters, state, commit }, id) => {
    const query = await fetch(`${state.BASE_URL}/api/releases/${id}`);
    const payload = await query.json();

    if (payload.ok) {
      return commit('SET_RELEASE', payload)
    }
    // TOOD handle error
  },

  async nuxtServerInit({ commit, dispatch }, { route }) {
    // TODO improve checks
    commit('SET_BASE_URL', BASE_URL)
    if (route.name == "collection-slug") {
      dispatch('GET_COLLECTION');
    }
    else if (route.name == "wishlist-slug") {
      dispatch('GET_WANTLIST');
    }
  }
}

export default actions
