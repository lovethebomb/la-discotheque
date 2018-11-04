import { shallowMount } from '@vue/test-utils'

import Content from '~/components/Content.vue'

describe('Content.vue', () => {
  it('renders <slot> properly', () => {
    const wrapper = shallowMount(Content, {
      slots: {
        default: ['Hello world']
      }
    })
    expect(wrapper.find('slot'))
  })

  it('matches snapshot', () => {
    const wrapper = shallowMount(Content)
    expect(wrapper.html()).toMatchSnapshot()
  })
})
