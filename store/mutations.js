const mutations = {
    'SET_COLLECTION': (state, payload) => {
      state.collection.items = [...payload.data.releases]
      state.collection.isLoaded = true;
    },

    'SET_RELEASE': (state, payload) => {
      state.currentRelease = Object.assign({}, payload.data)
    }

  }

export default mutations
