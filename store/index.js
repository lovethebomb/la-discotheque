import Vuex from 'vuex'
import fetch from 'isomorphic-fetch'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const state = () => ({
  BASE_URL: '',
  currentRelease: {},
  sidebarOpened: false,
  isMobile: false
})

export const mutations = {
  SET_BASE_URL(state, payload) {
    state.BASE_URL = payload
  },
  SET_RELEASE(state, payload) {
    state.currentRelease = Object.assign({}, payload.data)
  },
  SET_SIDEBAR_VISIBLE(state, payload) {
    state.sidebarOpened = payload
  },
  SET_LAYOUT_MOBILE(state, payload) {
    state.isMobile = payload
  }
}

export const getters = {
  getItemById: state => (folderName, id) => {
    if (!folderName) {
      console.error('[store][getters] getItemById - missing arg folderName')
      return
    }

    folderName = folderName === 'wishlist' ? 'wantlist' : folderName

    const folder = state[folderName]
    if (folder.items && folder.items.length > 0) {
      return folder.items.filter(item => item.id == id)[0]
    }
    return false
  },

  getItemByIndex: state => (folderName, index) => {
    if (!folderName) {
      console.error('[store][getters] getItemByIndex - missing arg folderName')
      return
    }

    folderName = folderName === 'wishlist' ? 'wantlist' : folderName

    const folder = state[folderName]
    if (folder.items && folder.items.length > 0) {
      return folder.items[index]
    }
    return false
  },

  getFolderIndexById: state => (folderName, id) => {
    if (!folderName) {
      console.error(
        '[store][getters] getFolderIndexById - missing arg folderName'
      )
      return
    }

    folderName = folderName === 'wishlist' ? 'wantlist' : folderName

    const folder = state[folderName]
    if (folder.items && folder.items.length > 0) {
      return folder.items.findIndex(item => item.id == id)
    }
    return false
  }
}

export const actions = {
  GET_RELEASE: async ({ getters, state, commit }, id) => {
    const query = await fetch(`${state.BASE_URL}/api/releases/${id}`)
    const payload = await query.json()

    if (payload.ok) {
      return commit('SET_RELEASE', payload)
    }
    // TODO handle error
  },
  async nuxtServerInit({ commit, dispatch }, { route }) {
    // TODO improve checks
    commit('SET_BASE_URL', BASE_URL)
    if (route.name == 'collection-slug') {
      dispatch('collection/GET_COLLECTION')
    } else if (route.name == 'wishlist-slug') {
      dispatch('wantlist/GET_WANTLIST')
    }
  }
}
