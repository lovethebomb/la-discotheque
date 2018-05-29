<template>
  <div class="Content">
    <slot />
  </div>
</template>

<style lang="postcss">
@import "~assets/css/_variables.css";

.Content {
  margin-left: 146px;
  padding: 0 1em 0 70px;

  @media screen and (max-width: 768px) {
    margin: auto;
    padding: 0;
  }
}
</style>
