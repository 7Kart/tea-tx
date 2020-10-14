<template>
  <div class="photo-circle">
      <img :src="instaSrc" width="size"/>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '200px'
    },
    instaSrc: {
      type: String,
      default: null
    }
  }
}
</script>