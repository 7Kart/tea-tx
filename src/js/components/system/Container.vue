<template>
  <div class="container-grid">
    <slot></slot>
  </div>
</template>

<script>
export default {
  mounted() {
  }
}
</script>

<style lang="scss">
@import '../../../assets/scss/utils/vars.scss';

.container-grid {
  // background-color: red;
  display: flex;
  flex-direction: column;
  margin: 0 192px 0 192px;
  height: 100%;
  

  @media screen and (max-width: $desktopLgWidth) {
    margin: 0 151px 0 151px;
  }

  @media screen and (max-width: $desktopWidth) {
    margin: 0 168px 0 168px;
  }

  @media screen and (max-width: $smDesktopWidth) {
    margin: 0 103px 0 103px;
  }

  @media screen and (max-width: $phoneWidth) {
    margin: 0 42px 0 42px;
  }
}
</style>



