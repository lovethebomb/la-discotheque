<template>
  <transition
    @beforeEnter="beforeEnter"
    @enter="enter">
    <div
      v-show="isLoaded"
      :class="className"
      @mouseout="onDeselect"
      @mouseover="onSelect">
      <nuxt-link
        :to="releaseRoute"
        class="ReleaseItem__Link">
        {{ album }} by {{ artist }}
      </nuxt-link>
      <div class="ReleaseItem__Overlay" />
      <div
        ref="image"
        :data-src="cover"
        class="ReleaseItem__Image"/>
      <div class="ReleaseItem__Title">
        <p class="ReleaseItem__Album">
          <span>{{ album }}</span>
        </p>
        <p class="ReleaseItem__Artist">
          <span>{{ artist }}</span>
        </p>
      </div>
      <div class="ReleaseItem__Details">
        <span class="RelaseItem__Details__Label">{{ label }}</span>
      </div>
    </div>
  </transition>
</template>


<script>
import { TweenLite, Power4 } from 'gsap';
import slugify from 'slugify';

export default {
  props: {
    release: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0,
      require: false
    }
  },

  data() {
    return {
      isSelected: false,
      isLoaded: false,
      timeout: false
    }
  },

  computed: {
    className() { return `ReleaseItem ${this.isSelected ? 'is-selected' : ''}`; },
    album() { return this.release.basic_information ?
      this.release.basic_information.title :
      "Album";
    },
    artist() { return this.release.basic_information ?
      this.release.basic_information.artists.map(artist => artist.name).join(', ') :
      "Artist";
    },
    cover() { return this.release.basic_information ?
      this.release.basic_information.cover_image :
      "";
    },
    label() { return this.release.basic_information ?
      this.release.basic_information.labels.map(label => label.name).join(', ') :
      "";
    },
    releaseRoute() {
      const slug = slugify(`${this.album.substring(0, 32)}-by-${this.artist.substring(0,32)}`)
      return `/collection/${this.release.id}-${slug}`;
    }
  },
  mounted() {
    this.$nextTick(this.loadImage);
    // this.loadImage()
  },
  methods: {
    // Logic
    loadImage() {
      const self = this;
      const img = new Image();
      img.onload = () => {
        this.$refs.image.style.backgroundImage = `url('${self.cover}'`;
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
      // console.debug('beforeEnter')
      TweenLite.set(el, {
        y: 40,
        opacity: .01
      })
    },
    enter(el, done) {
      // console.debug('onEnter', el, this.index)
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
@import "~assets/css/_variables.css";

.ReleaseItem {
  position: relative;
  width: 100%;
  max-width: var(--releaseItemWidth);
  max-height: var(--releaseItemHeight);
  will-change: opacity;
  box-shadow: 0 2px 40px 0 #0D0D0D;
}

.ReleaseItem__Link {
  text-indent: -9999px;
  overflow: hidden;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
}

.ReleaseItem__Overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #222;
  opacity: 0.23;
  will-change: opacity;
  transition: opacity .15s ease-in-out;
  z-index: 1;
}

.ReleaseItem__Image {
  width: 100%;
  height: var(--releaseItemHeight);
  overflow: hidden;
  background-color: lightgrey;
  background-size: 100%;
  background-size: cover;
  background-repeat: no-repeat;
}

.ReleaseItem__Title {
  position: absolute;
  bottom: 40px;
  left: -26px;
  z-index: 1;
}

.ReleaseItem__Album {
  font-family: "bluu";
  font-size: 32px;
  margin-bottom: 10px;
  opacity: 0;
  /* transform: translate3d(0, 20px, 0); */
  transition: opacity .25s ease-out, transform .25s ease-out;
  /* transition-delay: .1s; */
  z-index: 1;

}
.ReleaseItem__Album span {
  padding: 0px 6px 2px 6px;
}

.ReleaseItem__Artist span {
  padding: 4px 6px 2px 6px;
}
.ReleaseItem__Album span, .ReleaseItem__Artist span {
  line-height: 1em;
  background-color: var(--releaseTitleBackground);
}

.ReleaseItem__Artist {
  font-size: 24px;
  line-height: 1em;
  opacity: 0;
  /* transform: translate3d(0, 20px, 0); */
  transition: opacity .24s ease-out, transform .25s ease-out;
  transition-delay: .1s;
  z-index: 1;
}

.ReleaseItem__Details {
  position: absolute;
  bottom: calc(-1em - 10px);
  left: 0px;
  color: var(--releaseDetailsText);
  font-size: 14px;
  opacity: 0;
  transition: opacity .26s ease-out, transform .25s ease-out;
  transition-delay: .2s;
}

/* States */
.ReleaseItem.is-selected {}

.ReleaseItem.is-selected .ReleaseItem__Overlay {
  opacity: 0;
}

.ReleaseItem.is-selected .ReleaseItem__Album, .ReleaseItem.is-selected .ReleaseItem__Artist {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.ReleaseItem.is-selected .ReleaseItem__Details {
  opacity: 1;
}



</style>
