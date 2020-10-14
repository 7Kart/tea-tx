<template>
  <div>
    <firstSection @menuToggle="onMenuToggle" />
    <second-page />
  </div>
</template>

<script>
import firstSection from '../components/ExperiencePage/FirstSection.vue'
import secondPage from '../components/ExperiencePage/SecondSection.vue'

export default {
  components: {
    firstSection,
    secondPage
  },
  methods: {
    onMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>

