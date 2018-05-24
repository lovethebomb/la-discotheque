import { shallowMount } from '@vue/test-utils'

import NuxtLink from '@/.nuxt/components/nuxt-link'
import Sidebar from '@/components/Sidebar.vue'

describe('Sidebar.vue', () => {
  beforeEach(() => {
    Sidebar.components = Object.assign(Sidebar.components || {}, { 'NuxtLink': NuxtLink})
  })

  it('renders nuxt-link correctly', () => {
    const wrapper = shallowMount(Sidebar)
    expect(wrapper.findAll('a')).toHaveLength(3)
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(Sidebar)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
