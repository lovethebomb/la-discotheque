<template>
  <div>{{ say }}</div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from '@vue/composition-api'

interface Props {
  gros: string
}

export default defineComponent({
  props: {
    gros: {
      type: String,
      required: true
    }
  },

  setup(props: Props) {
    const message = ref('This is a message')
    const say = computed(() => `Hello ${message.value} ${props.gros}`)

    return {
      message,
      say
    }
  }
})
</script>
