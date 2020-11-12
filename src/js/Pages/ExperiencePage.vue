<template>
  <div class="experince-container">
    <div class="section-container">
      <firstSection @menuToggle="onMenuToggle" />
      <secondSection />
      <thirdSection />
    </div>
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
  },
  beforeRouteLeave(to, from, next) {
    this.$scrollTo('.experince-container', 300, {
      container: 'body',
      easing: 'ease',
      offset: 0,
      force: true,
      cancelable: false,
      onStart: () => {
        next()
      }
      // onDone: () => {
      //   next()
      // }
    })
  }
}
</script>

<style lang="scss" scoped>
.experince-container {
  position: relative;
  .section-container{
    position: relative;
    z-index: 30;
  }
  .body-block {
    height: 4500px;
  }
}
</style>
