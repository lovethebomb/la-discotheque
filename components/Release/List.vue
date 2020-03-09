<template>
  <div class="ReleaseList" @resize="onResize">
    <ReleaseItem
      v-for="(release, index) in releases"
      :key="release.id"
      :index="index"
      :release="release"
    />
  </div>
</template>

<script lang="ts">
import ReleaseItem from '~/components/Release/Item.vue'

const MAX_WIDTH = 330
const MARGIN = 90

export default {
  components: {
    ReleaseItem
  },
  props: {
    releases: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      columns: 0
    }
  },
  mounted() {
    this.onResize()
    this.$root.$on('resize', this.onResize)
  },
  beforeDestroy() {
    this.$root.$off('resize', this.onResize)
  },
  methods: {
    onResize() {
      const width = this.$el.offsetWidth
      const items = ~~(width / (MAX_WIDTH + MARGIN))
      if (items === this.columns) {
        return
      }
      this.columns = items % 2 ? items : 2
      this.$children.map((item, index) => {
        const row = ~~(index / items)
        const relativeIndex = index - items * row
        if (relativeIndex % this.columns === 1) {
          item.hasOffset = true
          return
        }
        item.hasOffset = false
      })
    }
  }
}
</script>

<style lang="postcss">
.ReleaseList {
  display: flex;
  flex-flow: row wrap;
  .ReleaseItem {
    margin: var(--releaseItemMargin);
    transition: margin-top 0.15s ease-out;
    &.has-offset {
      margin-top: var(--releaseItemOffset);
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
    padding: 0 2em;
    .ReleaseItem {
      margin: 3em auto !important;
    }
  }
}
</style>
