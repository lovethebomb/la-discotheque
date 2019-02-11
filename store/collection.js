import fetch from 'isomorphic-fetch'

export const state = () => ({
  items: [],
  isLoaded: false
})

export const mutations = {
  SET_COLLECTION(state, payload) {
    state.items = [...payload.data.releases]
    state.isLoaded = true
  }
}

export const getters = {
  count(state) {
    return state.items.length
  }
}

export const actions = {
  GET_COLLECTION: async ({ commit, rootState }) => {
    const query = await fetch(`${rootState.BASE_URL}/api/collection`)
    const payload = await query.json()

    if (payload.ok) {
      return commit('SET_COLLECTION', payload)
    }
    // TODO handle error
  }
}
