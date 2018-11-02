<template>
  <div class="Related__Item">
    <nuxt-link
      :to="releaseRoute"
      class="Related__Item__Link"
    >
      {{ album }} by {{ artist }}
    </nuxt-link>
    <Cover
      :cover="cover"
      class="Related__Item__Cover"
    />
    <p>{{ release.basic_information.title }}</p>
  </div>
</template>

<script>
import slugify from 'slugify';

import Cover from '~/components/Detail/Cover';

export default {
  components: {
    Cover,
  },
  props: {
    release: {
      type: Object,
      required: true
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
  computed: {
    album() { return this.release.basic_information ?
      this.release.basic_information.title :
      "Album";
    },
    artist() { return this.release.basic_information ?
      this.release.basic_information.artists.map(artist => artist.name).join(', ') :
      "Artist";
    },
    cover() { return this.release.basic_information.cover_image ?
      this.release.basic_information.cover_image :
      "";
    },
    releaseRoute() {
      const slug = slugify(`${this.album.substring(0, 32)}-by-${this.artist.substring(0,32)}`)
      return `/${this.folder}/${this.release.id}-${slug}`;
    }
  },
}
</script>

<style>
.Related__Item {
  display: inline-block;
  position: relative;
  width: 50%;

  p {
    font-size: 12px;
    margin-top: 1em;
    text-align: center;
  }
}

.Related__Item__Link {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-indent: -9999px;
  overflow: hidden;
  z-index: 99;
}

.Related__Item__Cover {
  max-width: 150px;
  max-height: 150px;
  margin: auto;
}
</style>
