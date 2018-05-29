<template>
  <div class="Collection">
    <ReleaseList :releases="releases" />
  </div>
</template>

<script>
import ReleaseList from '~/components/Release/List.vue';

export default {
  components: {
   ReleaseList
  },
  async asyncData ({ store }) {
    if (!store.state.collection.isLoaded) {
      await store.dispatch('GET_COLLECTION');
    }

    return {
      releases: store.state.collection.items
    }
  }
}
</script>

<style lang="postcss">
@import "~assets/css/_variables.css";

.Collection {
  padding-top: var(--releaseListPadding);

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
}
</style>
