<template>
  <div class="info-circle">
    <h3 class="circle-header">{{ headerContent }}</h3>
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
  },
  mounted() {
    this.setHeight()
    window.addEventListener('resize', () => {
      this.setHeight()
    })
  },
  methods: {
    setHeight() {
      this.$el.style.height = `${this.$el.offsetWidth}px`
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