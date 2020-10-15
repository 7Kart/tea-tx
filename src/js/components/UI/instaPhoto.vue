<template>
  <div class="photo-circle">
    <img :src="instaSrc"  />
  </div>
</template>

<script>
export default {
  props: {   
    instaSrc: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-circle {
  img {
    border-radius: 50%;
    height: 100%;
    width: 100%;
  }
}
</style>