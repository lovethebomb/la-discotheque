<template>
  <div class="Content">
    <Logo />
    <slot />
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  }
}
</script>

<style>
.Content {
  margin-left: 96px;
  padding: 0 1em 0 26px;
}

.Content .Logo {
  margin: 2em 0 4em 0;
}
</style>
