import { createLocalVue, mount } from '@vue/test-utils'
import VueCompositionApi from '@vue/composition-api'

import MyLogo from '@/components/MyLogo.vue'

const localVue = createLocalVue()
localVue.use(VueCompositionApi)

const wrapper = mount(MyLogo, {
  propsData: {
    gros: 'ploup'
  },
  localVue
})

describe('MyLogo', () => {
  test('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // Mount an instance and inspect the render output
  test('renders the correct message', async () => {
    await wrapper.vm.$nextTick()
    // expect(wrapper).toBe('Hello This is a message ploup')
    expect(wrapper.text()).toBe('Hello This is a message ploup')
  })
})
