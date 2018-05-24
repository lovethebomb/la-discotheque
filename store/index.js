import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const createStore = () => {
  return new Vuex.Store({
    state: {
      currentRelease: {},
      collection: {
        items: [],
        isLoaded: false
      }
    },
    getters,
    mutations,
    actions
  })
}

export default createStore
