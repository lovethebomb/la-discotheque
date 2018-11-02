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
import debounce from 'debounce';

import Menu from '~/components/Menu.vue'
import Sidebar from '~/components/Sidebar.vue'
import Content from '~/components/Content.vue'

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
      let route = this.$route.name || 'default';
      return `container page-${route}`;
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
    this.$root.off('resize', this.testResize);
  },
  created() {
    if (!this.$isServer) {
      // emitResize.aply(this);
      this.testResize();
    }
  },
  mounted() {
    if (!this.$isServer) {
      const debouncedResize = debounce(this.testResize, 100);
      window.addEventListener('resize', debouncedResize)
    }
  },
  methods: {
    testResize() {
      if (window && window.innerWidth < 789) {
        // if state is already mobile, skip
        if (this.isMobile) {
          return;
        }

        return this.$store.commit('SET_LAYOUT_MOBILE', true)
      }

      // if state is already desktop, skip
      if (!this.isMobile) {
        return;
      }

      return this.$store.commit('SET_LAYOUT_MOBILE', false)
    },

  }
}
</script>

<style lang="css">
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
