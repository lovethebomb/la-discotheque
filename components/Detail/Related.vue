<template>
  <div
    class="DetailItem__Related Related"
    role="complementary"
  >
    <RelatedItem
      v-if="previous"
      :release="previous"
      :folder="folder"
      class="Related__Previous"
    />
    <RelatedItem
      v-if="next"
      :release="next"
      :folder="folder"
      class="Related__Next"
    />
  </div>
</template>

<script>

import RelatedItem from '~/components/Detail/RelatedItem';

export default {
  components: {
    RelatedItem,
  },
  props: {
    previous: {
      type: [Object, Boolean],
      default: undefined,
      required: false
    },
    next: {
      type: [Object, Boolean],
      default: undefined,
      required: false
    },
    folder: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
  },
}
</script>

<style>
.Related {
  max-width: 450px;
  margin: 2em 0;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;
}
</style>
