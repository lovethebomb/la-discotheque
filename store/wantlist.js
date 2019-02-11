import fetch from 'isomorphic-fetch'

export const state = () => ({
  items: [],
  isLoaded: false
})

export const mutations = {
  SET_WANTLIST(state, payload) {
    state.items = [...payload.data.wants]
    state.isLoaded = true
  }
}

export const getters = {
  count(state) {
    return state.items.length
  }
}

export const actions = {
  GET_WANTLIST: async ({ commit, rootState }) => {
    const query = await fetch(`${rootState.BASE_URL}/api/wantlist`)
    const payload = await query.json()

    if (payload.ok) {
      return commit('SET_WANTLIST', payload)
    }
    // TODO handle error
  }
}
