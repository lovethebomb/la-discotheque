import * as jest from 'jest';

jest.mock("nuxt/lib/app/components/nuxt-link", () => {
  return {
    name: 'nuxt-link',
    functional: true,
    render (h, { data, children }) {
      return h('router-link', data, children)
    }
  }
});

import NuxtLink from 'nuxt/lib/app/components/nuxt-link'
