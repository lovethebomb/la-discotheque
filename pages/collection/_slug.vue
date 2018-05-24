<template>
  <div class="ReleaseDetails">
    <ReleaseDetailsItem :release="release" />
  </div>
</template>

<script>
import ReleaseDetailsItem from '~/components/Release/DetailsItem'

export default {
  components: {
    ReleaseDetailsItem
  },
  validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.slug);
  },
  async asyncData ({ params, store }) {
    const id = params.slug;

    if (store.state.currentRelease.id === ~~id) {
      return;
    }

    await store.dispatch('GET_RELEASE', id)
    return {
      release: store.state.currentRelease,
      id: id
    }
  }
}

</script>
