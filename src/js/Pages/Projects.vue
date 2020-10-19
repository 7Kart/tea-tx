<template>
  <div class="projects-container">
    <partnerSection @menuToggle="onMenuToggle" />
  </div>
</template>

<script>
import partnerSection from '../components/ProjectsPage/PartnerSection.vue'

export default {
  components: {
    partnerSection
  },
  methods: {
    onMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>