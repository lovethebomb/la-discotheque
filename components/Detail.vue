<template>
  <div class="Detail grid">
    <!-- <header class="Detail__Header">
    </header> -->
    <div class="Detail__Content">
      <div class="Detail__Content__Left column is-4">
        <Cover :cover="cover" />
        <Related
          :previous="previous"
          :folder="folder"
          :next="next"
        />
      </div>
      <div class="Detail__Content__Right column">
        <Pagination
          v-if="false"
          class="is-12"
        />
        <Info
          :release="release"
          class="Detail__Info column is-6"
        />
        <Tracklist
          :tracklist="tracklist"
          class="Detail__Tracklist column is-6"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TweenLite, Power4 } from 'gsap'
import Cover from '~/components/Detail/Cover'
import Related from '~/components/Detail/Related'
import Info from '~/components/Detail/Info'
import Tracklist from '~/components/Detail/Tracklist'
import Pagination from '~/components/Detail/Pagination'
export default {
  components: {
    Cover,
    Related,
    Info,
    Tracklist,
    Pagination
  },
  props: {
    release: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isLoaded: true
    }
  },
  computed: {
    cover() {
      return this.release.images ? this.release.images[0].resource_url : ''
    },
    tracklist() {
      return this.release.tracklist ? this.release.tracklist : []
    },
    folder() {
      return this.$route.name.indexOf('wishlist') > -1
        ? 'wishlist'
        : 'collection'
    },
    index() {
      if (this.release.id) {
        return this.$store.getters.getFolderIndexById(
          this.folder,
          this.release.id
        )
      }
      return false
    },
    previous() {
      if (this.index !== false) {
        return this.$store.getters.getItemByIndex(this.folder, this.index - 1)
      }
      return false
    },
    next() {
      if (this.index !== false) {
        return this.$store.getters.getItemByIndex(this.folder, this.index + 1)
      }
      return false
    }
  },
  methods: {
    // Events
    onSelect(e, b, c) {
      this.$set(this, 'isSelected', true)
    },
    onDeselect(e, b, c) {
      this.$set(this, 'isSelected', false)
    },
    // Animations
    beforeEnter(el) {
      TweenLite.set(el, {
        y: 40,
        opacity: 0.01
      })
    },
    enter(el, done) {
      TweenLite.to(el, 0.35, {
        y: 0,
        opacity: 1,
        delay: this.index / 4,
        ease: Power4.easeOut,
        onComplete: () => {
          done()
        }
      })
    }
  }
}
</script>

<style lang="postcss">
.Detail {
  margin: auto;
}
.Detail__Header {
  position: relative;
  margin-bottom: 68px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.Detail__Content {
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: center;
}
.Detail__Content__Left {
  padding-left: 0;
}
.Detail__Content__Right {
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  padding-left: 10px;
}
.Detail__Info, .Detail__Tracklist {
  padding: 0;
}
@media screen and (max-width: 1200px), print {
  .Detail__Content {
  }
  .Detail__Content__Right {
    flex-flow: column wrap;
  }
  .Info {
    width: 100%;
  }
  .Tracklist {
    width: 100%;
    margin-top: 2em;
    .Tracklist__Header {
      position: static;
      h3 {
        visibility: visible;
        height: auto;
      }
      img {
        display: none;
      }
    }
  }
}
@media screen and (max-width: 800px), print {
  .Detail__Content {
    flex-flow: column wrap;
    align-items: center;
    .Detail__Content__Left {
      width: 100%;
    }
    .Detail__Content__Right {
      display: block;
      margin-top: 2em;
    }
  }
}
@media screen and (max-width: 768px) {
  .Detail__Content__Left  {
    padding: 0 2em;
  }
}
</style>
