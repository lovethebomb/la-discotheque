<template>
  <button
    class="Menu"
    @click="onClick"
  >Menu</button>
</template>

<script>
export default {
  computed: {
    isOpen() {
      return this.$store.state.sidebarOpened
    }
  },
  methods: {
    onClick() {
      this.$store.commit('SET_SIDEBAR_VISIBLE', !this.isOpen)
    }
  }
}
</script>

<style lang="postcss">
.Menu {
  display: none;
  appearance: none;
  background: none;
  outline: none;
  border: none;
  color: var(--colorBlue);
  font-family: var(--font-stack-IBM-semibold);
  font-size: 14px;
  position: fixed;
  top: 40px;
  right: 40px;
  z-index: 20;

  @media screen and (max-width: 768px) {
    display: inline-block;
  }
}
</style>
