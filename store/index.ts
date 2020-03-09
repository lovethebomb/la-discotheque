import { ActionContext, Commit, Dispatch } from 'vuex'
import { getAccessorType } from 'typed-vuex'
import { Context } from '@nuxt/types'

// import Vuex from 'vuex'
// import fetch from 'isomorphic-fetch'

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'

export const state = () => ({
  BASE_URL: '',
  currentRelease: {},
  sidebarOpened: false,
  isMobile: false
})

export type RootState = ReturnType<typeof state>

export const mutations = {
  SET_BASE_URL(state: RootState, url: string) {
    state.BASE_URL = url
  },
  SET_RELEASE(state: RootState, release: Object) {
    state.currentRelease = Object.assign({}, release.data)
  },
  SET_SIDEBAR_VISIBLE(state: RootState, visible: boolean) {
    state.sidebarOpened = visible
  },
  SET_LAYOUT_MOBILE(state: RootState, isMobile: boolean) {
    state.isMobile = isMobile
  }
}

export const getters = {
  getItemById: (state: RootState) => (folderName: String, id: number) => {
    // if (!folderName) {
    //   console.error('[store][getters] getItemById - missing arg folderName')
    //   return
    // }

    folderName = folderName === 'wishlist' ? 'wantlist' : folderName

    const folder = state[folderName]
    if (folder.items && folder.items.length > 0) {
      return folder.items.filter((item) => item.id === id)[0]
    }
    return false
  },

  getItemByIndex: (state: RootState) => (folderName: String, index: number) => {
    folderName = folderName === 'wishlist' ? 'wantlist' : folderName

    const folder = state[folderName]
    if (folder.items && folder.items.length > 0) {
      return folder.items[index]
    }
    return false
  },

  getFolderIndexById: (state: RootState) => (
    folderName: String,
    id: number
  ) => {
    folderName = folderName === 'wishlist' ? 'wantlist' : folderName

    const folder = state[folderName]
    if (folder.items && folder.items.length > 0) {
      return folder.items.findIndex((item) => item.id === id)
    }
    return false
  }
}

export const actions = {
  GET_RELEASE: async (
    { state, commit }: ActionContext<RootState, RootState>,
    id: number
  ) => {
    const query = await fetch(`${state.BASE_URL}/api/releases/${id}`)
    const payload = await query.json()

    if (payload.ok) {
      return commit('SET_RELEASE', payload)
    }
    // TODO handle error
  },
  // async nuxtServerInit(
  //   { commit, dispatch }: ActionContext<Commit, Dispatch>,
  //   { route }: Context
  // ) {
  //   // TODO improve checks
  //   await commit('SET_BASE_URL', BASE_URL)
  //   if (route.name === 'collection-slug') {
  //     await dispatch('collection/GET_COLLECTION')
  //   } else if (route.name === 'wishlist-slug') {
  //     await dispatch('wantlist/GET_WANTLIST')
  //   }
  // }
}

export const accessorType = getAccessorType({
  state,
  getters,
  mutations,
  actions
})
