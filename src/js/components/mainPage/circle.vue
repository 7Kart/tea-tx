<template>
  <div class="circle-background"></div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../../../assets/scss/utils/vars.scss';

.circle-background {
  position: absolute;
  bottom: 0;
  left: -25vw;
  height: 245vw;
  width: 245vw;
  border-radius: 50%;
  background-color: $main-theme;
  @media screen and (max-width: $desktopLgWidth) {
    left: -3vw;
    height: 200vw;
    width: 200vw;
  }
  @media screen and (max-width: $desktopWidth) {
    left: -5;
    height: 220vw;
    width: 220vw;
  }
  @media screen and (max-width: $smDesktopWidth) {
    left: -25vw;
    height: 270vw;
    width: 270vw;
  }
  @media screen and (max-width: $tableWidth) {
    left: -32vw;
    height: 250vw;
    width: 250vw;
  }
  @media screen and (max-width: $smTableWidth) {
    left: -40vw;
    height: 340vw;
    width: 340vw;
  }
}
</style>