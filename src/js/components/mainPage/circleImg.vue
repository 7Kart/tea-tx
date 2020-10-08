<template>
  <div class="three-point-img-container">
    <img src="/assets/img/danurwendho-adyakusuma-dYxx-jPaF34-unsplash.jpg" />

    <testMask />

    <!-- <div class="background-container">
      <div class="mask-upper"></div>
      <div class="mask-container">
        <imgMask maskVerAlign="center" maskHorAlign="flex-start" />
        <imgMask maskVerAlign="center" maskHorAlign="space-around" />
        <imgMask maskVerAlign="center" maskHorAlign="flex-end" />

      </div>
      <div class="mask-bottom"></div>
    </div> -->
  </div>
</template>

<script>
import imgMask from '../svg/mask.vue'
import testMask from '../svg/svgMask.vue'
export default {
  components: {
    imgMask,
    testMask
  }
}
</script>

<style lang="scss" scoped>
@import '../../../assets/scss/utils/vars.scss';

.three-point-img-container {
  position: relative;
//   overflow: hidden;
  margin: 164px 0;
  @media screen and (max-width: $desktopLgWidth) {
    margin: 152px 0;
  }
  @media screen and (max-width: $desktopWidth) {
    margin: 80px 0;
  }
  @media screen and (max-width: $phoneWidth) {
    margin: 40px 0;
  }
  img {
    // clip-path: url(#myClip);
    width: 100%;
  }

}
</style>