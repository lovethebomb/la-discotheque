<template>
  <section class="container">
    <Sidebar />
    <Content>
      <nuxt/>
    </Content>
  </section>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
import Content from '~/components/Content.vue'

export default {
  components: {
    Sidebar,
    Content
  }
}
</script>

<style>
html {
  font-family: "IBMPlexMono-Regular";
  font-size: 16px;
  background: #212223;
  color: #fff;
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
  font-family: "IBMPlexMono-SemiBold";
  color: #0053FF;
  text-decoration: none;
}
</style>
