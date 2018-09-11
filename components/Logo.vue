<template>
  <div class="Logo">
    <nuxt-link
      to="/"
      @click.native="onClick">
      <h1>La Discothèque</h1>
      <img
        src="/img/svg/logo-notfinal.svg"
        alt="Logo - La Discothèque">
    </nuxt-link>
  </div>
</template>

<script>
export default {
  computed: {
    isMobile() {
      return this.$store.state.isMobile
    }
  },
  methods: {
    onClick(e) {
      if (this.isMobile) {
        this.$store.commit('SET_SIDEBAR_VISIBLE', false)
      }

      return true;
    }
  }
}
</script>

<style>
.Logo {
  width: 102px;
  height: 102px;
}

.Logo a {
  color:inherit;
}

.Logo h1 {
  visibility: hidden;
  height: 0px;
}
</style>
