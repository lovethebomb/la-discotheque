<template>
  <section :class="className">
    <Menu />
    <Sidebar />
    <Content>
      <nuxt />
    </Content>
  </section>
</template>

<script lang="ts">
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
      const route = this.$route.name || 'default'
      return `container page-${route}`
    }
  }
}
</script>

<style lang="postcss">
@import '~/assets/css/_variables.css';
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
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
a {
  font-family: var(--font-stack-IBM-semibold);
  color: #0053ff;
  text-decoration: none;
  &:hover {
    color: red;
  }
}
.container {
  padding-top: 40px;
}
</style>
