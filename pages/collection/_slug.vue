<template>
  <div class="CollectionDetail">
    <Detail :release="release" />
  </div>
</template>

<script>
import Detail from '~/components/Detail'
export default {
  components: {
    Detail
  },
  validate({ params }) {
    // Must be a number-album-by-artist
    return params.slug.split('-').length >= 4
  },
  async asyncData({ params, store }) {
    const slug = params.slug.split('-')
    const id = slug[0]
    if (store.state.currentRelease.id === ~~id) {
      return
    }
    await store.dispatch('GET_RELEASE', id)
    return {
      release: store.state.currentRelease,
      id: id
    }
  },
  head() {
    const album = this.release.title
    const artist = this.release.artists.map(artist => artist.name).join(', ')
    return {
      title: `${album} by ${artist} - Collection - La Discothèque - Discogs collection viewer`
    }
  }
}
</script>
