<template>
  <div class="Detail grid">
    <header class="Detail__Header">
      <div class="DetailItem__Title">
        <p class="DetailItem__Album">
          <span>{{ album }}</span>
        </p>
        <p class="DetailItem__Artist">
          <span>{{ artist }}</span>
        </p>
      </div>
      <a
        :href="discogsURI"
        class="DetailItem__DiscogsLink"
        target="_blank"
        rel="noopener">See on Discogs</a>
    </header>
    <div class="Detail__Content">
      <div class="Detail__Content__Left column is-4">
        <div class="DetailItem__Image">
          <img
            ref="image"
            :data-src="cover">
        </div>
      </div>
      <div class="Detail__Content__Right column is-4">
        <ReleaseItemTracklist :tracklist="tracklist"/>
        <a
          href="#"
          class="DetailItem__More">+ infos</a>
      </div>
    </div>
  </div>
</template>


<script>
import { TweenLite, Power4 } from 'gsap';

import ReleaseItemTracklist from '~/components/Release/Tracklist';

export default {
  components: {
    ReleaseItemTracklist
  },

  props: {
    release: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isLoaded: true,
    }
  },

  computed: {
    album() { return this.release.title ?
      this.release.title :
      "Album";
    },
    artist() { return this.release.artists ?
      this.release.artists.map(artist => artist.name).join(', ') :
      "Artist";
    },
    cover() { return this.release.images ?
      this.release.images[0].resource_url :
      "";
    },
    discogsURI() {
      return this.release.uri
    },
    label() { return this.release.labels ?
      this.release.labels.map(label => label.name).join(', ') :
      "";
    },
    tracklist() { return this.release.tracklist ?
      this.release.tracklist :
      []
    }
  },
  mounted(context) {
    this.loadImage();
  },
  methods: {
    // Logic
    loadImage() {
      const self = this;
      const img = new Image();
      img.onload = () => {
        this.$refs.image.src = self.cover;
        TweenLite.to(this.$refs.image, .25, {
          opacity: 1
        })
        self.$set(this, 'isLoaded', true)
      }
      img.src = self.cover;
    },
    // Events
    onSelect(e, b, c) {
      this.$set(this, 'isSelected', true);

    },
    onDeselect(e, b, c) {
        this.$set(this, 'isSelected', false);
    },
    // Animations
    beforeEnter(el) {
      console.debug('beforeEnter')
      TweenLite.set(el, {
        y: 40,
        opacity: .01
      })
    },
    enter(el, done) {
      console.debug('onEnter', el, this.index)
      TweenLite.to(el, .35, {
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

<style>
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
  /* because of Tracklist, we add padding */
  padding-left: 30px;
  margin-left: 90px; /* column size */
  align-self: center;
}

.DetailItem__Title {}

.DetailItem__Album {
  font-family: "bluu";
  font-size: 32px;
  margin-right: 16px;
  display: inline-block;
}

.DetailItem__Artist {
  font-size: 24px;
  display: inline-block;
}

.DetailItem__DiscogsLink {
  display: block;
  text-align: right;
  font-size: 14px;
  text-decoration: none;
  padding-top: 4px;
}


.DetailItem__Image {
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px
}

.DetailItem__Image img {
  width: 100%;
  opacity: 0.01;
  will-change: opacity;
}


.DetailItem .Tracklist {
  margin-top: 68px;
  margin-bottom: 40px;
}
</style>
