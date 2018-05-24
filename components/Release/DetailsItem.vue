<template>
  <div class="ReleaseDetailsItem">
    <div class="ReleaseDetailsItem__Left">
      <div class="ReleaseDetailsItem__Title">
        <p class="ReleaseDetailsItem__Album">
          <span>{{ album }}</span>
        </p>
        <p class="ReleaseDetailsItem__Artist">
          <span>{{ artist }}</span>
        </p>
      </div>
      <div class="ReleaseDetailsItem__Image">
        <img
          ref="image"
          :data-src="cover">
      </div>
    </div>
    <div class="ReleaseDetailsItem__Right">
      <a
        href="#"
        class="ReleaseDetailsItem__DiscogsLink">See on Discogs</a>
      <ReleaseItemTracklist :tracklist="tracklist"/>
      <a
        href="#"
        class="ReleaseDetailsItem__More">+ infos</a>
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
.ReleaseDetailsItem {
  display: flex;
  flex-flow: row wrap;
  position: relative;
  justify-content: space-between;
}

.ReleaseDetailsItem__Left {
  width: 100%;
  max-width: 450px
}

.ReleaseDetailsItem__Right {
  width: 100%;
  max-width: 330px;
}


.ReleaseDetailsItem__Image {
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px
}

.ReleaseDetailsItem__Image img {
  width: 100%;
  opacity: 0.01;
  will-change: opacity;
}

.ReleaseDetailsItem__Title {
  margin-bottom: 68px;
}

.ReleaseDetailsItem__Album {
  font-family: "bluu";
  font-size: 32px;
  margin-right: 16px;
  display: inline-block;
}

.ReleaseDetailsItem__Artist {
  font-size: 24px;
  line-height: 0em;
  display: inline-block;
}

.ReleaseDetailsItem__DiscogsLink {
  display: block;
  text-align: right;
  font-size: 14px;
  text-decoration: none;
  line-height: 32px;
}

.ReleaseDetailsItem .Tracklist {
  margin-top: 68px;
  margin-bottom: 40px;
}


</style>
