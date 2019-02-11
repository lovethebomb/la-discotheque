<template>
  <div class="Wishlist">
    <ReleaseList :releases="releases" />
  </div>
</template>

<script>
import ReleaseList from '~/components/Release/List.vue'

export default {
  components: {
    ReleaseList
  },
  async asyncData({ store }) {
    if (!store.state.wantlist.isLoaded) {
      await store.dispatch('wantlist/GET_WANTLIST')
    }

    return {
      releases: store.state.wantlist.items
    }
  },
  head() {
    return {
      title: 'Wishlist - La Discothèque - Discogs collection viewer'
    }
  }
}
</script>

<style lang="css">
.Wishlist {
  padding-top: var(--releaseListPadding);

  @media screen and (max-width: 768px) {
    padding-top: 0;
  }
}
</style>
