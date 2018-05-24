const mutations = {
  'SET_BASE_URL': (state, payload) => {
    state.BASE_URL = payload;
  },
  'SET_COLLECTION': (state, payload) => {
    state.collection.items = [...payload.data.releases]
    state.collection.isLoaded = true;
  },
  'SET_WANTLIST': (state, payload) => {
    state.wantlist.items = [...payload.data.wants]
    state.wantlist.isLoaded = true;
  },
  'SET_RELEASE': (state, payload) => {
    state.currentRelease = Object.assign({}, payload.data)
  }
}

export default mutations
