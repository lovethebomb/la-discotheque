<template>
  <div class="Title">
    <p class="Title__Album">{{ album }}</p>
    <p class="Title__Artist">{{ artist }}</p>
  </div>
</template>

<script>
export default {
  props: {
    album: {
      type: String,
      required: true
    },
    artist: {
      type: String,
      required: true
    },
  }
}
</script>

<style lang="css">
.Title {
    color: var(--colorText);

  .Title__Album {
    font-family: "bluu";
    font-size: 32px;
    color: inherit;
    margin-right: 16px;
  }

  .Title__Artist {
    font-size: 24px;
    margin: .2em auto;
    color: inherit;
  }
}
</style>
