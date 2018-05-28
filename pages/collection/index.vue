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
    if (!store.state.collection.isLoaded) {
      await store.dispatch('GET_COLLECTION');
    }

    return {
      releases: store.state.collection.items
    }
  }
}
</script>
