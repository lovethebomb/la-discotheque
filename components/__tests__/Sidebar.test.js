import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'

const localVue = createLocalVue()
import createStore from '~/store'

import NuxtLink from 'nuxt/lib/app/components/nuxt-link'
import Sidebar from '~/components/Sidebar.vue'

localVue.use(Vuex)
describe('Sidebar.vue', () => {
  let store

  beforeEach(() => {
    store = createStore()
    Sidebar.components = Object.assign(Sidebar.components || {}, { 'NuxtLink': NuxtLink})
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(Sidebar, { store, localVue })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
