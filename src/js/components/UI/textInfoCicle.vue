<template>
  <div class="info-circle">
    <h3>{{ headerContent }}</h3>
    <p>{{ textContent }}</p>
  </div>
</template>

<script>
export default {
  props: {
    headerContent: {
      type: String,
      default: ''
    },
    textContent: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.info-circle {
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>