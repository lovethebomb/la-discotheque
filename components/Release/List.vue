<template>
  <div class="ReleaseList">
    <ReleaseItem
      v-for="(release, index) in releases"
      :key="release.id"
      :index="index"
      :release="release" />
  </div>
</template>

<script>
import { TweenLite, Power4 } from 'gsap';

import ReleaseItem from '~/components/Release/Item.vue';

export default {
  components: {
    ReleaseItem
  },
  props: {
    releases: {
      type: Array,
      required: true
    }
  },
}
</script>

<style>
.ReleaseList {
  display: flex;
  flex-flow: row wrap;
}
</style>


