<template>
  <div class="experince-container">
    <firstSection @menuToggle="onMenuToggle" />
    <secondSection />
    <thirdSection/>

    <footer-app />
  </div>
</template>

<script>
import firstSection from '../components/ExperiencePage/FirstSection.vue'
import secondSection from '../components/ExperiencePage/SecondSection.vue'
import thirdSection from '../components/ExperiencePage/ThirdSection.vue'
import footerApp from '../components/system/Footer.vue'

export default {
  components: {
    firstSection,
    secondSection,
    thirdSection,
    footerApp
  },
  methods: {
    onMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>

<style lang="scss" scoped>
.experince-container {
  position: relative;
  .body-block {
    height: 4500px;
  }
}
</style>
