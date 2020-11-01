<template>
  <div class="projects-container">
    <div class="section-contaienr">
      <projectsSection @menuToggle="onMenuToggle" />
      <partnersSection />
    </div>
    <footer-app />
  </div>
</template>

<script>
import projectsSection from '../components/ProjectsPage/ProjectsSection.vue'
import partnersSection from '../components/ProjectsPage/PartnersSection.vue'
import footerApp from '../components/system/Footer.vue'

export default {
  components: {
    projectsSection,
    partnersSection,
    footerApp
  },
  methods: {
    onMenuToggle() {
      this.$emit('menuToggle')
    }
  },
  beforeRouteLeave(to, from, next) {
    next()
    this.$scrollTo('.projects-container', 300, {
      container: 'body',
      easing: 'ease',
      offset: 0,
      force: true,
      cancelable: false,
      onStart: () => {
        next()
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.section-contaienr {
  background-color: #ced7cc;
  z-index: 30;
  position: relative;
}
</style>