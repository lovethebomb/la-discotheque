import { shallowMount } from '@vue/test-utils'

import NuxtLink from 'nuxt/lib/app/components/nuxt-link'
import Logo from '~/components/Logo.vue'

describe('Logo.vue', () => {
  beforeEach(() => {
    Logo.components = Object.assign(Logo.components || {}, {
      NuxtLink: NuxtLink
    })
  })

  it('renders nuxt-link correctly', () => {
    const wrapper = shallowMount(Logo)
    expect(wrapper.find('a'))
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(Logo)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
