<template>
  <div class="Collection">
    <ReleaseList :releases="releases" />
  </div>
</template>

<script>
import ReleaseList from '~/components/Release/List.vue'

export default {
  components: {
    ReleaseList
  },
  props: {
    releases: {
      required: true,
      type: Array
    }
  },
}
</script>
