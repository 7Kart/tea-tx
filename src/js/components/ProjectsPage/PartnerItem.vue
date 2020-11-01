<template>
  <div>
    <a :href="projectLink" target="_blank">
      <img :src="imgSrc" :alt="projectName" />
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String
    },
    projectName: {
      type: String
    },
    projectLink: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}
</style>