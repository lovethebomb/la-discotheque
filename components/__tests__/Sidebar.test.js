import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

import { state, mutations, getters, actions } from '~/store'
import Sidebar from '~/components/Sidebar.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

function createStore() {
  return new Vuex.Store({
    state,
    mutations,
    getters,
    actions
  })
}

describe('Sidebar.vue', () => {
  let store
  beforeEach(() => {
    store = createStore()
    Sidebar.components = Object.assign(Sidebar.components || {})
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(Sidebar, { store, localVue })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
