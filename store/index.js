import Vuex from 'vuex'

import getters from './getters'
import mutations from './mutations'
import actions from './actions'

const createStore = () => {
  return new Vuex.Store({
    state: {
      BASE_URL: '',
      currentRelease: {},
      collection: {
        items: [],
        isLoaded: false
      },
      wantlist: {
        items: [],
        isLoaded: false
      },
      sidebarOpened: false,
      isMobile: false
    },
    getters,
    mutations,
    actions
  })
}

export default createStore
