<template>
  <section class="container">
    <Menu />
    <Sidebar />
    <Content>
      <nuxt/>
    </Content>
  </section>
</template>

<script>
import debounce from 'debounce';

import Menu from '~/components/Menu.vue'
import Sidebar from '~/components/Sidebar.vue'
import Content from '~/components/Content.vue'

// We keep function separately here
function testResize() {
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
    }
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
  },
  created() {
    if (!this.$isServer) {
      testResize.apply(this);
    }
  },
  mounted() {
    if (!this.$isServer) {
      window.addEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize: debounce(testResize, 50),
  }
}
</script>

<style lang="postcss">
@import "~assets/css/_variables.css";

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
