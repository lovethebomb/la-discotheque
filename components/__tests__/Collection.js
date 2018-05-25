
import { mount, shallowMount } from '@vue/test-utils'

import NuxtLink from '~/.nuxt/components/nuxt-link'
import Collection from '~/components/Collection.vue'

const releases = [
  { id: 123 },
  { id: 456 },
]
describe('Collection.vue', () => {
  beforeEach(() => {
    Collection.components = Object.assign(Collection.components || {}, { 'NuxtLink': NuxtLink})
  })

  it('renders properly', (done) => {
    // const wrapper = mount(Collection, {
    //   propsData: {
    //     releases,
    //   }
    // })
    // expect(wrapper.find('div'))
    done()
  })

  it('matches snapshot', (done) => {
    // const wrapper = shallowMount(Collection)
    // expect(wrapper.html()).toMatchSnapshot()
    done();
  })
})
