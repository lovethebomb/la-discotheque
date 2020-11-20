<template>
  <transition :css="false" @beforeEnter="beforeEnter" @enter="enter">
    <div
      v-show="isLoaded"
      :class="className"
      @mouseout="onDeselect"
      @mouseover="onSelect"
    >
      <nuxt-link :to="releaseRoute" class="ReleaseItem__Link">
        {{ album }} by {{ artist }}
      </nuxt-link>
      <div ref="image" :data-src="cover" class="ReleaseItem__Image" />
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
      <div class="ReleaseItem__Overlay" />
    </div>
  </transition>
</template>

<script lang="ts">
import { TweenLite, Power4 } from 'gsap'
import slugify from 'slugify'

type Artist = {
  name: string
}

type Label = {
  name: string
}

export default {
  props: {
    release: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      default: 0,
      required: false
    }
  },
  data() {
    return {
      isSelected: false,
      hasOffset: false,
      isLoaded: false,
      timeout: false
    }
  },
  computed: {
    className(): string {
      return `ReleaseItem ${this.isSelected ? 'is-selected' : ''} ${
        this.hasOffset ? 'has-offset' : ''
      }`
    },
    album(): string {
      return this.release.basic_information
        ? this.release.basic_information.title
        : 'Album'
    },
    artist(): string {
      return this.release.basic_information
        ? this.release.basic_information.artists
            .map((artist: Artist) => artist.name)
            .join(', ')
        : 'Artist'
    },
    cover(): string {
      return this.release.basic_information
        ? this.release.basic_information.cover_image
        : ''
    },
    label(): string {
      return this.release.basic_information
        ? this.release.basic_information.labels
            .map((label: Label) => label.name)
            .join(', ')
        : ''
    },
    releaseRoute(): string {
      const slug = slugify(
        `${this.album.substring(0, 32)}-by-${this.artist.substring(0, 32)}`
      )
      const route = this.$route.name || 'collection'
      return `/${route}/${this.release.id}-${slug}`
    }
  },
  mounted() {
    this.$nextTick(this.loadImage)
    // this.loadImage()
  },
  methods: {
    // Logic
    loadImage() {
      const self = this
      const img = new Image()
      img.onload = () => {
        this.$refs.image.style.backgroundImage = `url('${self.cover}'`
        self.$set(this, 'isLoaded', true)
      }
      img.src = self.cover
    },
    // Events
    onSelect() {
      this.$set(this, 'isSelected', true)
    },
    onDeselect() {
      this.$set(this, 'isSelected', false)
    },
    // Animations
    beforeEnter(el: HTMLElement) {
      TweenLite.set(el, {
        y: 40,
        opacity: 0.01
      })
    },
    enter(el: HTMLElement, done: Function) {
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
.ReleaseItem {
  position: relative;
  width: 100%;
  max-width: var(--releaseItemWidth);
  max-height: var(--releaseItemHeight);
  will-change: opacity;
  box-shadow: 0 2px 40px 0 #0d0d0d;
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
    transition: opacity 0.15s ease-in-out;
    z-index: 10;
  }
  .ReleaseItem__Image {
    width: 100%;
    overflow: hidden;
    background-color: lightgrey;
    background-size: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    padding-top: 100%;
  }
  .ReleaseItem__Title {
    position: absolute;
    bottom: 40px;
    left: -20px;
    z-index: 1;
  }
  .ReleaseItem__Album {
    font-family: 'bluu';
    font-size: 32px;
    margin-bottom: 10px;
    opacity: 0.001;
    transition: opacity 0.25s ease-out;
    z-index: 2;
    position: relative;
    span {
      padding: 0px 6px 2px 0px;
      line-height: 1em;
    }
  }
  .ReleaseItem__Artist {
    font-size: 24px;
    line-height: 1em;
    opacity: 0.001;
    transition: opacity 0.24s ease-out;
    transition-delay: 0.1s;
    margin-top: -10px;
    z-index: 1;
    span {
      padding: 4px 6px 2px 0px;
      line-height: 38px;
    }
  }
  .ReleaseItem__Album span,
  .ReleaseItem__Artist span {
    background-color: var(--releaseTitleBackground);
  }
  .ReleaseItem__Details {
    position: absolute;
    bottom: calc(-1em - 10px);
    left: 0px;
    color: var(--releaseDetailsText);
    font-size: 14px;
    opacity: 0.001;
    transition: opacity 0.26s ease-out, transform 0.25s ease-out;
    transition-delay: 0.2s;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    max-width: 90%;
  }
  /* States */
  &.is-selected {
    .ReleaseItem__Overlay {
      opacity: 0.0001;
    }
    .ReleaseItem__Album,
    .ReleaseItem__Artist {
      opacity: 1;
    }
    .ReleaseItem__Details {
      opacity: 1;
    }
  }
  @media screen and (max-width: 768px) {
    .ReleaseItem__Overlay {
      opacity: 0.0001;
    }
    .ReleaseItem__Album,
    .ReleaseItem__Artist {
      opacity: 1;
    }
    .ReleaseItem__Details {
      opacity: 1;
    }
  }
}
</style>
