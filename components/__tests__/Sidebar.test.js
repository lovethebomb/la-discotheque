import { shallowMount } from '@vue/test-utils'

import NuxtLink from 'nuxt/lib/app/components/nuxt-link'
import Sidebar from '~/components/Sidebar.vue'

describe('Sidebar.vue', () => {
  beforeEach(() => {
    Sidebar.components = Object.assign(Sidebar.components || {}, { 'NuxtLink': NuxtLink})
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(Sidebar)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
