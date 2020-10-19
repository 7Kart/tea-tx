<template>
  <div class="projects-container">
    <projectSection @menuToggle="onMenuToggle" />
  </div>
</template>

<script>
import projectSection from '../components/ProjectsPage/ProjectSection.vue'

export default {
  components: {
    projectSection
  },
  methods: {
    onMenuToggle() {
      this.$emit('menuToggle')
    }
  }
}
</script>