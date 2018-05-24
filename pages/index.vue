<template>
  <p>.</p>
</template>

<script>

export default {
  mounted() {
    console.debug('index is up!')
    setTimeout( () => {
      this.$router.push('collection')
    }, 0)
  }
}
</script>
