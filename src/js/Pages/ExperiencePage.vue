<template>
  <firstSection @menuToggle="onMenuToggle"/>
</template>

<script>

import firstSection from '../components/ExperiencePage/FirstSection.vue'

export default {
  components:{
    firstSection
  },
  methods:{
    onMenuToggle(){
      this.$emit("menuToggle")
    }
  }
}
</script>

