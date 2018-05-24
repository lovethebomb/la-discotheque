<template>
  <Collection :releases="releases"/>
</template>

<script>
import Collection from '~/components/Collection.vue';

export default {
  components: {
    Collection
  },
  async asyncData ({ store }) {
    if (store.state.wantlist.isLoaded) {
      return
    }

    await store.dispatch('GET_WANTLIST');
    return {
      releases: store.state.wantlist.items
    }
  }
}
</script>
