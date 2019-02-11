import * as jest from 'jest'

import VueTestUtils from '@vue/test-utils'
VueTestUtils.config.stubs['nuxt-link'] = '<a><slot /></a>'
