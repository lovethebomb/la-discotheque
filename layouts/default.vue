<template>
  <section :class="className">
    <Menu />
    <Sidebar />
    <Content>
      <nuxt />
    </Content>
  </section>
</template>

<script>
import debounce from 'debounce'

import Menu from '~/components/Menu.vue'
import Sidebar from '~/components/Sidebar.vue'
import Content from '~/components/Content.vue'

function emitResize() {
  this.$root.$emit('resize')
}

export default {
  components: {
    Menu,
    Sidebar,
    Content
  },
  computed: {
    isMobile() {
      return this.$store.state.isMobile
    },
    className() {
      let route = this.$route.name || 'default'
      return `container page-${route}`
    }
  },
  beforeDestroy: function() {
    window.removeEventListener('resize', this.debouncedResize)
    this.$root.off('resize', this.testResize)
  },
  created() {
    if (!this.$isServer) {
      this.testResize()
    }
  },
  mounted() {
    if (!this.$isServer) {
      this.$root.$on('resize', this.testResize)
      window.addEventListener('resize', this.debouncedResize)
    }
  },
  methods: {
    debouncedResize: debounce(emitResize, 100),
    testResize() {
      if (window && window.innerWidth < 789) {
        // if state is already mobile, skip
        if (this.isMobile) {
          return
        }

        return this.$store.commit('SET_LAYOUT_MOBILE', true)
      }

      // if state is already desktop, skip
      if (!this.isMobile) {
        return
      }

      return this.$store.commit('SET_LAYOUT_MOBILE', false)
    }
  }
}
</script>

<style lang="postcss">
@import "~/assets/css/_variables.css";

html {
  font-family: var(--font-stack-IBM-regular);
  font-size: 16px;
  background-color: var(--colorBackground);
  color: var(--colorText);
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  font-family: var(--font-stack-IBM-semibold);
  color: #0053FF;
  text-decoration: none;

  &:hover {
    color: red;
  }
}

.container {
  padding-top: 40px;
}

</style>
