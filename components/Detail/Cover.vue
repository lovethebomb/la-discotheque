<template>
  <div class="DetailItem__Image">
    <img
      ref="image"
      :data-src="cover"
    >
  </div>
</template>

<script>
export default {
  props: {
    cover: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isLoaded: false
    }
  },
  mounted() {
    this.loadImage()
  },
  methods: {
    loadImage() {
      const self = this
      const img = new Image()
      img.onload = () => {
        this.$refs.image.src = self.cover
        TweenLite.to(this.$refs.image, 0.25, {
          opacity: 1
        })
        self.$set(this, 'isLoaded', true)
      }
      img.src = self.cover
    }
  }
}
</script>

<style>
.DetailItem__Image {
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px;
}

.DetailItem__Image img {
  width: 100%;
  opacity: 0.01;
  will-change: opacity;
}
</style>
